class MessagesChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stop_all_streams
    puts ("Connected to channel #{params[:id]}")
    @channel = Channel.find_by(id: params[:id])
    stream_for @channel
  end

  def receive(data)
    @message = Message.new(data)
    if @message.save
      message = {
        message: message_json
      }
      MessagesChannel.broadcast_to(@channel, message)
    end
  end

  def unsubscribed
    stop_all_streams
    puts ("Disconnected from channel #{params[:id]}")
    # Any cleanup needed when channel is unsubscribed
  end

  private
  def message_json 
    JSON.parse(ApplicationController.render(
        partial: 'api/messages/message',
        locals: { message: @message })
    ) # creates json object using message views (partial) and passing @message as the variable to use in message views (locals)
  end

end
