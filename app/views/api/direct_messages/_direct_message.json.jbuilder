json.extract! direct_message, :id, :user_id, :friend_id

json.friend do
    json.partial! 'api/users/user', user: direct_message.friend
end

json.members do
        json.set! direct_message.friend.id do
            json.partial! 'api/users/user', user: direct_message.friend
        end
        json.set! direct_message.user.id do
            json.partial! 'api/users/user', user: direct_message.user
        end
end

json.messages do
    direct_message.messages.each do |message|
        json.set! message.id do
            json.partial! 'api/messages/message', message: message
        end
    end
end