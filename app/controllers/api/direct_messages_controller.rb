class Api::DirectMessagesController < ApplicationController

    def index
        @dms = DirectMessage.all
        render "api/direct_messages/index"
    end

    def show
        @dm = DirectMessage.includes(:messages).find_by(id: params[:id])
        render "api/direct_messages/show"
    end

    def create
        #check if dm exists
        @dm = DirectMessage.new(dm_params)
        existingDm = DirectMessage.find_by(user_id: params[:dm][:user_id], friend_id: params[:dm][:friend_id])
        if @dm.save
            render "api/direct_messages/show"
        elsif existingDm
            render json: ["Dm already exists"], status: 422
        else
            render json: @dm.errors.full_messages, status: 422
        end
    end

    def destroy
        @dm = DirectMessage.find_by(id: params[:id] )

        if @dm && @dm.delete
            @dms = DirectMessage.all
            render "api/direct_messages/show"
        else
            render json: ["You don't have permission/dm doesn't exist"], status: 422
        end
    end


    def dm_params
        params.require(:dm).permit(:user_id, :friend_id)
    end
end