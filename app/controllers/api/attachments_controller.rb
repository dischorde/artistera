class Api::AttachmentsController < ApplicationController
  def create
    @attachment = Attachment.new(attachment_params)

    if !@attachment.save
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
