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
        @dm = DirectMessage.new(dm_params)
        if @dm.save
            render "api/direct_messages/show"
        else
            errors = @dm.errors.full_messages
            render json: errors, status: 422
        end
    end

    def destroy
        @dm = DirectMessage.find_by(id: params[:id])

        if @dm && @dm.delete
            @dms = DirectMessage.all
            render "api/direct_messages/show"
        else
            render json: ["You don't have permission/dm doesn't exist"], status: 422
        end
    end


    def dm_params
        params.require(:direct_message).permit(:user_id, :server_id)
    end
end