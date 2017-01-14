class AddAttachmentCoverImgToProjects < ActiveRecord::Migration
  def self.up
    change_table :projects do |t|
      t.attachment :cover_img
    end
  end

  def self.down
    remove_attachment :projects, :cover_img
  end
end
