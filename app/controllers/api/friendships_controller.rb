class Api::FriendshipsController < ApplicationController
    def index
        @user = current_user

        render 'api/friendships/index'
    end

    def create
        @friendship = Friendship.new(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
        if @friendship.save
            Friendship.create(user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id])
            render 'api/friendships/show'
        else
           render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        @friendship = Friendship.find_by(user_id: friendship_params[:user_id], friend_id: friendship_params[:friend_id])
        other_friendship = Friendship.find_by(user_id: friendship_params[:friend_id], friend_id: friendship_params[:user_id])
        if @friendship.destroy && other_friendship.destroy
            render 'api/friendships/show'
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    private
    def friendship_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end