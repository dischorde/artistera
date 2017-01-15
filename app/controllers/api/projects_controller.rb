class Api::ProjectsController < ApplicationController
  before_action :find_project, only: [:show, :update, :delete]

  def index
    @projects = Project.all
  end

  def show
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    if @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def delete
    @project.destroy
    render :show
  end

  private

  def find_project
    @project = Project.includes(:attachments).find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :description)
  end

end
