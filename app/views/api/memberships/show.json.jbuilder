
# json.set! @membership.id do
#     json.member do
#       json.extract! @member, :id, :username
#     end
    
#     json.server do
#       json.extract! @server, :id, :name, :owner_id
#     end
# end


   
json.extract! @membership, :id, :user_id, :server_id