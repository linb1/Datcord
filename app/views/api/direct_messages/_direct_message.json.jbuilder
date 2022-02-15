json.extract! direct_message, :id, :user_id, :friend_id

json.friend do
    json.partial! 'api/users/user', user: direct_message.friend
end

json.messages do
    direct_message.messages.each do |message|
        json.set! message.id do
            json.partial! 'api/messages/message', message: message
        end
    end
end