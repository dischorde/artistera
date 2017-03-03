class Api::EnrollmentsController < ApplicationController
  before_action :set_current_user

  def create
    enrollment = Enrollment.new(enroll_params)

    if enrollment.save
      render 'api/users/info'
    else
      render json: enrollment.errors.full_messages, status: 422
    end
  end

  def destroy
    enrollment = Enrollment.find(user_id: enroll_params[:user_id],
                                 course_id: enroll_params[:course_id])
    enrollment.destroy
    render 'api/users/info'
  end

  private

  def set_current_user
    @user = current_user
  end

  def enroll_params
    params.require(:enrollment).permit(:user_id, :course_id)
  end

end
