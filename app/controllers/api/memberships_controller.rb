class Api::MembershipsController < ApplicationController

    def create
        @membership = Membership.new(membership_params)
        if @membership.save
            @member = @membership.user
            @server = @membership.server
            render "api/memberships/show"
        else
            render json: @membership.errors.full_messages, status:400
        end
    end

    def destroy
    @membership = Membership.find_by(membership_params)
        # debugger;
        if @membership.destroy
            @member = @membership.user
            @server = @membership.server
            render 'api/memberships/show'
        else
            render json: @membership.errors, status: 422
        end
    end

    private

    def membership_params
        params.require(:membership).permit(:user_id, :server_id)
    end
end