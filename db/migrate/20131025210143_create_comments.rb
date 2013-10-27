class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body
      t.text :name
      t.references :project

      t.timestamps
    end
    add_index :comments, :project_id
  end
end
