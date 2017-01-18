class Api::ReviewsController < ApplicationController
  before_action :find_review, only: [:show, :update, :destroy]

  def index
    @reviews = Review.where(course_id: params[:course_id])
  end

  def show
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    if @review.update_attributes(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review.destroy
    render :show
  end

  private

  def find_review
    @review = Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:body, :course_id, :user_id)
  end

end
