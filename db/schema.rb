# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170117233244) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assignments", force: :cascade do |t|
    t.integer  "course_id",   null: false
    t.string   "title",       null: false
    t.text     "description", null: false
    t.text     "deliverable", null: false
    t.text     "materials"
    t.text     "resources"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["course_id"], name: "index_assignments_on_course_id", using: :btree
  end

  create_table "attachments", force: :cascade do |t|
    t.string   "attachable_type"
    t.integer  "attachable_id"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "document_file_name"
    t.string   "document_content_type"
    t.integer  "document_file_size"
    t.datetime "document_updated_at"
    t.index ["attachable_type", "attachable_id"], name: "index_attachments_on_attachable_type_and_attachable_id", using: :btree
  end

  create_table "courses", force: :cascade do |t|
    t.string   "title",              null: false
    t.text     "description",        null: false
    t.string   "assignment_summary", null: false
    t.string   "playlist_src",       null: false
    t.string   "cover_img_src",      null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["title"], name: "index_courses_on_title", using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title",                  null: false
    t.text     "description",            null: false
    t.integer  "user_id",                null: false
    t.integer  "assignment_id",          null: false
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.string   "cover_img_file_name"
    t.string   "cover_img_content_type"
    t.integer  "cover_img_file_size"
    t.datetime "cover_img_updated_at"
    t.index ["assignment_id"], name: "index_projects_on_assignment_id", using: :btree
    t.index ["user_id"], name: "index_projects_on_user_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "user_id",    null: false
    t.integer  "course_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_reviews_on_course_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "gravatar_hash"
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
