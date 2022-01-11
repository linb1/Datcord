# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Server.delete_all
Membership.delete_all

admin = User.create!(email: "admin@email.com", username: "admin", password: "password", date_of_birth: "2001/4/23")
demo_user = User.create!(email: "demo@email.com", username: "demo", password: "password", date_of_birth: "2019/3/13")




demo_server = Server.create!(owner_id: 1, name: "Demo Server")

demo_membership = Membership.create!(user_id: 1, server_id: 1)

demo_channel = Channel.create!(name: "general", server_id: demo_server.id)

