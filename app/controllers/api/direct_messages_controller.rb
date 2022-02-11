class Api::DirectMessagesController < ApplicationController

    def index

    end

    def show

    end

    def create
        @dm = DirectMessage.new(dm_params)
        if @dm.save
            render "api/channels/show"
        else
            errors = @dm.errors.full_messages
            render json: errors, status: 422
        end
    end

    def destroy

    end


    def dm_params
        params.require(:direct_message).permit(:user_id, :server_id)
    end
end