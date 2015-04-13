class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :command

      t.timestamps
    end
  end
end
