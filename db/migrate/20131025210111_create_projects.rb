class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.text :title
      t.text :body
      t.text :name

      t.timestamps
    end
  end
end
