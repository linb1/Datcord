class Api::UsersController < ApplicationController
    def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      errors = @user.errors.full_messages
      if params[:user][:password] == ""
        errors.unshift("Password can't be blank")
      end
      render json: errors, status: 422
    end
  end

  def show
    @user = User.includes(:friends).find_by(id: params[:id])
    render 'api/users/show'
  end

  def index
    @users = User.all
    render "api/users/index"
  end


  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :date_of_birth)
  end
end
