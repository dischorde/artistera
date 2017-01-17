class Api::AttachmentsController < ApplicationController
  def create
    @attachment = Attachment.new(attachment_params)

    if @attachment.save
      if attachment_params[:attachable_type] === "Project"
        @project = Project.find(attachment_params[:attachable_id])
        render 'api/projects/show'
      end
    else
      render json: @attachment.errors.full_messages, status: 422
    end
  end

  def destroy
    @attachment = Attachment.find(params[:id])
    @attachment.destroy
    @attachment
  end

  private

  def attachment_params
    params.require(:attachment).permit(:document, :attachable_type, :attachable_id)
  end
end
