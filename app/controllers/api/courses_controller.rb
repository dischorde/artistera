class Api::CoursesController < ApplicationController

  def index
    @courses = Course.all
    if query && !query.empty?
      @courses = @courses.where(
        [
          'title ILIKE :query OR description ILIKE :query',
          { query: "%#{query}%" }
        ]
      )
    end
  end

  def show
    @course = Course.includes(:assignment, :projects).find(params[:id])
  end

  private

  def query
    params[:search]
  end

end
