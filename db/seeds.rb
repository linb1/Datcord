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
Channel.delete_all
Friendship.delete_all

admin = User.create!(email: "admin@email.com", username: "admin", password: "password", date_of_birth: "2001/4/23")
demo_user = User.create!(email: "demo@email.com", username: "demo", password: "password", date_of_birth: "2019/3/13")
alvin_user = User.create!(email: "alvin@email.com", username: "alvinZablan1", password: "password", date_of_birth: "2003/4/13")
tom_user = User.create!(email: "thomas@email.com", username: "TomTolland", password: "password", date_of_birth: "2000/11/11")
traveller_user = User.create!(email: "traveller@email.com", username: "traveller94", password: "password", date_of_birth: "1987/7/05")
holland_user = User.create!(email: "holland@email.com", username: "homholland3", password: "password", date_of_birth: "2007/3/04")
kobe_user = User.create!(email: "kobe@email.com", username: "kobe24", password: "password", date_of_birth: "1997/12/9")
cohort_user = User.create!(email: "cohort@email.com", username: "cohort10-04-21", password: "password", date_of_birth: "2010/5/20")
crush_user = User.create!(email: "crush@email.com", username: "mycrush<3", password: "password", date_of_birth: "1999/10/25")
crush2_user = User.create!(email: "crush2@email.com", username: "mycrushsfriend", password: "password", date_of_birth: "1999/10/25")
bing_user = User.create!(email: "bing@email.com", username: "bingbong", password: "password", date_of_birth: "2017/8/24")
brian_user = User.create!(email: "brian@email.com", username: "brian", password: "password", date_of_birth: "1990/1/15")

demo_server = Server.create!(owner_id: admin.id, name: "Demo Server")
genshin_server = Server.create!(owner_id: admin.id, name: "Genshin Impacters")
knicks_server = Server.create!(owner_id: admin.id, name: "knicks baby")
marvel_server = Server.create!(owner_id: admin.id, name: "marvel multiverse")
coding_server = Server.create!(owner_id: admin.id, name: "coding pains")
uwu_server = Server.create!(owner_id: admin.id, name: "uwu")
aa_server = Server.create!(owner_id: admin.id, name: "app academy's best ever")

admin_membership = Membership.create!(user_id: admin.id, server_id: demo_server.id)
admin_membership2 = Membership.create!(user_id: admin.id, server_id: genshin_server.id)
admin_membership3 = Membership.create!(user_id: admin.id, server_id: marvel_server.id)
admin_membership4 = Membership.create!(user_id: admin.id, server_id: coding_server.id)
admin_membership5 = Membership.create!(user_id: admin.id, server_id: uwu_server.id)
admin_membership6 = Membership.create!(user_id: admin.id, server_id: aa_server.id)
admin_membership8 = Membership.create!(user_id: admin.id, server_id: knicks_server.id)

demo_membership = Membership.create!(user_id: demo_user.id, server_id: demo_server.id)
demo_membership2 = Membership.create!(user_id: demo_user.id, server_id: genshin_server.id)
demo_membership3 = Membership.create!(user_id: demo_user.id, server_id: marvel_server.id)
demo_membership4 = Membership.create!(user_id: demo_user.id, server_id: coding_server.id)
demo_membership5 = Membership.create!(user_id: demo_user.id, server_id: uwu_server.id)
demo_membership6 = Membership.create!(user_id: demo_user.id, server_id: aa_server.id)
demo_membership8 = Membership.create!(user_id: demo_user.id, server_id: knicks_server.id)

alvin_membership = Membership.create!(user_id: alvin_user.id, server_id: demo_server.id)
alvin_membership2 = Membership.create!(user_id: alvin_user.id, server_id: coding_server.id)
alvin_membership3 = Membership.create!(user_id: alvin_user.id, server_id: aa_server.id)

tom_membership = Membership.create!(user_id: tom_user.id, server_id: demo_server.id)
tom_membership2 = Membership.create!(user_id: tom_user.id, server_id: marvel_server.id)

traveller_membership = Membership.create!(user_id: traveller_user.id, server_id: demo_server.id)
traveller_membership2 = Membership.create!(user_id: traveller_user.id, server_id: genshin_server.id)

holland_membership = Membership.create!(user_id: holland_user.id, server_id: demo_server.id)
holland_membership3 = Membership.create!(user_id: holland_user.id, server_id: marvel_server.id)

kobe_membership = Membership.create!(user_id: kobe_user.id, server_id: demo_server.id)
kobe_membership2 = Membership.create!(user_id: kobe_user.id, server_id: genshin_server.id)

cohort_membership = Membership.create!(user_id: cohort_user.id, server_id: demo_server.id)
cohort_membership4 = Membership.create!(user_id: cohort_user.id, server_id: coding_server.id)
cohort_membership6 = Membership.create!(user_id: cohort_user.id, server_id: aa_server.id)



crush_membership = Membership.create!(user_id: crush_user.id, server_id: demo_server.id)
crush_membership2 = Membership.create!(user_id: crush_user.id, server_id: genshin_server.id)
crush_membership5 = Membership.create!(user_id: crush_user.id, server_id: uwu_server.id)

crush2_membership = Membership.create!(user_id: crush2_user.id, server_id: demo_server.id)
crush2_membership5 = Membership.create!(user_id: crush2_user.id, server_id: uwu_server.id)

bing_membership = Membership.create!(user_id: bing_user.id, server_id: demo_server.id)
bing_membership8 = Membership.create!(user_id: bing_user.id, server_id: knicks_server.id)

brian_membership = Membership.create!(user_id: brian_user.id, server_id: demo_server.id)
brian_membership2 = Membership.create!(user_id: brian_user.id, server_id: genshin_server.id)
brian_membership4 = Membership.create!(user_id: brian_user.id, server_id: coding_server.id)
brian_membership6 = Membership.create!(user_id: brian_user.id, server_id: aa_server.id)

demo_channel = Channel.create!(name: "general", server_id: demo_server.id)
demo_channel2 = Channel.create!(name: "public chat", server_id: demo_server.id)

genshin_channel = Channel.create!(name: "general", server_id: genshin_server.id)

knicks_channel = Channel.create!(name: "general", server_id: knicks_server.id)

marvel_channel = Channel.create!(name: "general", server_id: marvel_server.id)

coding_channel = Channel.create!(name: "general", server_id: coding_server.id)

uwu_channel = Channel.create!(name: "general", server_id: uwu_server.id)


aa_channel = Channel.create!(name: "general", server_id: aa_server.id)

demo_friendship = Friendship.create!(user_id: demo_user.id, friend_id: admin.id)
demo_friendship2 = Friendship.create!(user_id: demo_user.id, friend_id: alvin_user.id)
demo_friendship3 = Friendship.create!(user_id: demo_user.id, friend_id: tom_user.id)
demo_friendship4 = Friendship.create!(user_id: demo_user.id, friend_id: traveller_user.id)
demo_friendship5 = Friendship.create!(user_id: demo_user.id, friend_id: holland_user.id)
demo_friendship6 = Friendship.create!(user_id: demo_user.id, friend_id: kobe_user.id)
demo_friendship7 = Friendship.create!(user_id: demo_user.id, friend_id: cohort_user.id)
demo_friendship10 = Friendship.create!(user_id: demo_user.id, friend_id: crush_user.id)
demo_friendship11 = Friendship.create!(user_id: demo_user.id, friend_id: crush2_user.id)
demo_friendship12 = Friendship.create!(user_id: demo_user.id, friend_id: bing_user.id)
demo_friendship13 = Friendship.create!(user_id: demo_user.id, friend_id: brian_user.id)

admin_friendship = Friendship.create!(user_id: admin.id, friend_id: demo_user.id)
alvin_friendship = Friendship.create!(user_id: alvin_user.id, friend_id: demo_user.id)
tom_friendship = Friendship.create!(user_id: tom_user.id, friend_id: demo_user.id)
traveller_friendship = Friendship.create!(user_id: traveller_user.id, friend_id: demo_user.id)
holland_friendship = Friendship.create!(user_id: holland_user.id, friend_id: demo_user.id)
kobe_friendship = Friendship.create!(user_id: kobe_user.id, friend_id: demo_user.id)
cohort_friendship = Friendship.create!(user_id: cohort_user.id, friend_id: demo_user.id)
crush_friendship = Friendship.create!(user_id: crush_user.id, friend_id: demo_user.id)
crush2_friendship = Friendship.create!(user_id: crush2_user.id, friend_id: demo_user.id)
bing_friendship = Friendship.create!(user_id: bing_user.id, friend_id: demo_user.id)
brian_friendship = Friendship.create!(user_id: brian_user.id, friend_id: demo_user.id)
