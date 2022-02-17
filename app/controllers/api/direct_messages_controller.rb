class Api::DirectMessagesController < ApplicationController

    def index
        dm_dmemberships = Dmembership.includes(:dm).dm_dmemberships(current_user.id)
        @dms = []
        dm_dmemberships.each do |dmembership|
            @dms.push(dmembership.dm)
        end
        render "api/direct_messages/index"
    end

    def show
        @dm = DirectMessage.includes(:messages, :friend, :dmembers).find_by(id: params[:id])
        render "api/direct_messages/show"
    end

    def create
        #check if dm exists
        
        existingDm = nil

        dm_dmemberships = Dmembership.includes(:dm).dm_dmemberships(current_user.id)
        dm_dmemberships.each do |dmembership|
            dmembers = []
            dmembership.dm.dmembers.each do |dmember|
                dmembers.push(dmember.id)
            end

            if dmembers.sort == dm_params[:member_ids].map(&:to_i).sort
                existingDm = dmembership.dm
            end
        end


        @dm = DirectMessage.new(user_id: dm_params[:user_id], friend_id: dm_params[:friend_id])
        # debugger
        if existingDm
            @dm = existingDm
            render "api/direct_messages/show"
        else
            if @dm.save
                dm_params[:member_ids].each do |member_id|
                    Dmembership.create(user_id: member_id, dm_id: @dm.id)
                end
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
        params.require(:dm).permit(:user_id, :friend_id, member_ids: [])
    end
end