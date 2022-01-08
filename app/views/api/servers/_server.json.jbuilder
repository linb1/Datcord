json.extract! server, :id, :name, :owner_id
json.channels do
    server.channels.each do |channel|
        json.set! channel.id do
            json.partial! 'api/channels/channel', channel: channel
        end
    end
end