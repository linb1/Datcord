# Datcord

[Datcord](https://datcord-bl.herokuapp.com/#/) is a Discord clone where users can create an account and have instant live messaging on different servers and channels. This application uses Ruby on Rails for the backend and React for the front end

<img width="1440" alt="Screen Shot 2022-01-14 at 10 45 45 AM" src="https://user-images.githubusercontent.com/68402088/149543815-767157a7-2bce-4eaa-96a4-a541621731cb.png">

## Technologies
 - Frontend: React, Redux, SCSS
 - Backend: Ruby on Rails, Postgresql
 - Live messaging: ActionCable, Redis, websockets

Datcord uses Postgresql to store information and Ruby on Rails to retrieve data from the database as a JSON object. On the frontend, AJAX request are made to the backend and data is processed to create states for the application, which is utilized throughout the app. Using React, data is then visualized and styled onto the inferface to be displayed. ActionCable subscribes the user to certain channel so that when a user creates a new message, that message is broadcasted to all users connected to the same channel.

## Versions
 - Rails 6.1.4.4
 - ruby 2.7.3
 - Node v10.13.0
 - npm 6.4.1

# Features

### Live Messaging

 - This features uses ActionCable to allow users to broadcast their messages to other users in real time.

 ![final](https://user-images.githubusercontent.com/68402088/149546830-d3fb86a6-10cf-463c-9106-2a234e9143b7.gif)

 - In order to subscribed the user to the right channel, the channelId had to be passed in from the frontend in order to establish the correct stream.
 - Instead of creating a new message via a controller, a new message is created directly in the channel when it receives a user's message.
 - In order to send the message back to the front end, the message is then converted into JSON and broadcasted to all subscribers of the channel.
 - The frontend received this message object, and adds it to the redux state.
 - Redux state is then used to render the message on the chat.
     
```ruby
def subscribed
    stop_all_streams
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
  end

  private
  def message_json 
    JSON.parse(ApplicationController.render(
        partial: 'api/messages/message',
        locals: { message: @message })
    )
  end
```
When a user sends a message, a new message is created and added to the database. Then, that message is converted into JSON and broadcasted to the channel the user is currently subscribed to.

```javascript
useEffect(() => {
        props.requestChannel(props.channelId)
        const chat = App.cable.subscriptions.create(
            { channel: "MessagesChannel", id: props.channelId},
            {
                received: (response) =>{
                    const { message } = response
                    props.receiveMessage(message)
                }
            }
            )
        setChat(chat);
        return () => {
            chat.unsubscribe()
        }
    }, [props.channelId])
```
When a message is broadcasted, it is received on the frontend and added to the redux state. It is then rendered onto the page.

### Servers and Channels
 - Users can create their own servers or channels, and have the option to leave/delete servers.
     - By creating associations, a hierarchy is created where users have multiple servers, and servers have multiple channels.
     - Only servers that users are members of are displayed for the user to access.
         - Achieved by creating Memberships table to create memberships between users and server. 
         - This membership is also created when a user creates a new server.
     - Servers display all channels that they owns, as well as all users that are members of the server.
     - Channels each have their own live chat.

### Home Page
 - Users can directly message other users that are on the user's friends list.
 - Users can also choose to remove others from their friends list.
 - There is a option to join the public server for new users.

# Future implementations for Datcord
 - Server/Channel dropdowns/modals
 - Real time updates for when new users joins/create channels
 - Profile modal - show/edit user information and logout option
 - Adding friends
 - Uploading custom images
 - Search functionality - for friends and messages
 - Reactions
 - Explore page
