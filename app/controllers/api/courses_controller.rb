class Api::CoursesController < ApplicationController

  def index
    @courses = Course.all
  end

  def show
    @course = Course.includes(:assignment, :projects).find(params[:id])
  end

end
