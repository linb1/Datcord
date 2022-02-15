class Api::DirectMessagesController < ApplicationController

    def index
        @dms = DirectMessage.all.where(user_id: current_user.id)
        render "api/direct_messages/index"
    end

    def show
        @dm = DirectMessage.includes(:messages, :friend).find_by(id: params[:id])
        render "api/direct_messages/show"
    end

    def create
        #check if dm exists
        @dm = DirectMessage.new(dm_params)
        existingDm = DirectMessage.find_by(user_id: params[:dm][:user_id], friend_id: params[:dm][:friend_id])
        if existingDm
            @dm = existingDm
            render "api/direct_messages/show"
        else
            if @dm.save
                friendDm = DirectMessage.create(user_id: params[:dm][:friend_id], friend_id: params[:dm][:user_id])
                render "api/direct_messages/show"
            else
                render json: @dm.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        @dm = DirectMessage.find_by(user_id: dm_params[:user_id], friend_id: dm_params[:friend_id])
        other_dm = DirectMessage.find_by(user_id: dm_params[:friend_id], friend_id: dm_params[:user_id])
        if @dm.destroy && other_dm.destroy
            render 'api/direct_messages/show'
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end


    def dm_params
        params.require(:dm).permit(:user_id, :friend_id)
    end
end