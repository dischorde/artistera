class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render :info
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @current_user = current_user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
