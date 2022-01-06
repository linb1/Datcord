class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params)
        if @channel.save
            render "api/channels/show"
        else
            errors = @channel.errors.full_messages
            render json: errors, status: 422
        end
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render "api/channels/show"
    end

    def index
        @channels = Channel.all
        render "api/channels/index"
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])

        if @channel && @channel.delete
            @channels = Channel.all
            render "api/channels/show"
        else
            render json: ["You don't have permission/channel doesn't exist"], status: 422
        end
    end

    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end