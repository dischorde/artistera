class Api::EnrollmentsController < ApplicationController

  def create
  end

  def destroy
  end

  private

  def enroll_params
    params.require(:enrollment).permit(:user_id, :course_id)
  end

end
