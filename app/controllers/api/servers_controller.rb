class Api::ServersController < ApplicationController

    def create
        @server = Server.new(server_params)
        if @server.save
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

        if @server && @server.delete
            @servers = Server.all
            render "api/servers/show"
        else
            render json: ["You don't have permission/Server doesn't exist"], status: 422
        end
        
    end

    def show
        @server = Server.find_by(id: params[:id])
        render "api/servers/show"
    end

    def index
        @servers = Server.all.where(owner_id: current_user.id)
        render "api/servers/index"
    end

    private

  def server_params
    params.require(:server).permit(:name, :owner_id)
  end

end