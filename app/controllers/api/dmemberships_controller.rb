class Api::DmembershipsController < ApplicationController

    def create
        @dmembership = Dmembership.new(dmembership_params)
        if @dmembership.save
            @dmember = @dmembership.user
            @dm = @dmembership.dm
            render "api/dmemberships/show"
        else
            render json: @dmembership.errors.full_messages, status:400
        end
    end

    def destroy
    @dmembership = Dmembership.find_by(dmembership_params)
        # debugger;
        if @dmembership.destroy
            @dmember = @dmembership.user
            @dm = @dmembership.dm
            render 'api/memberships/show'
        else
            render json: @dmembership.errors, status: 422
        end
    end

    private

    def dmembership_params
        params.require(:dmembership).permit(:user_id, :dm_id)
    end
end