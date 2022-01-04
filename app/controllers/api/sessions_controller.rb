class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      errors = []
      if params[:user][:email] == ""
        errors.push("Email can not be blank")
      end
      if params[:user][:password] == ""
        errors.push("password can not be blank")
      end
      errors.push("Email or password is invalid")
      render json: errors, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end