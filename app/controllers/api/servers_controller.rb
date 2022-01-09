class Api::ServersController < ApplicationController

    def create
        @server = Server.new(server_params)
        if @server.save
            # debugger;
            Membership.create(user_id: params[:server][:owner_id], server_id: @server.id)
            Channel.create(name: "general", server_id: @server.id)
            render "api/servers/show"
        else
            errors = @server.errors.full_messages
            render json: errors, status: 422
        end
    end

    def destroy
        #if currentuser id = server.owner.id, then delete
        # @server = current_user.owned_servers.find_by(id: params[:id])
        @server = Server.find_by(id: params[:id])
        owner = current_user.id == @server.owner_id
        if owner
            if @server && @server.destroy && owner
                @servers = Server.all
                render "api/servers/show"
            end
        else
            render json: ["You don't have permission/Server doesn't exist"], status: 422
        end
        
    end

    def show
        @server = Server.includes(:channels, :members).find_by(id: params[:id])
        # debugger
        render "api/servers/show"
    end

    def index
        # @servers = Server.all.where(owner_id: current_user.id) #membership still exists when server gets destroyed
        # owned_servers = Server.all.where(owner_id: current_user.id)
        server_memberships = Membership.includes(:server).server_memberships(current_user.id)
        @servers = []
        server_memberships.each do |membership|
            # debugger
            @servers.push(membership.server)
        end
        # owned_servers.each {|server| @servers.push(server)}
        # debugger
        render "api/servers/index"
    end

    private

  def server_params
    params.require(:server).permit(:name, :owner_id)
  end

end