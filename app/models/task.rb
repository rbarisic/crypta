class Task < ActiveRecord::Base
	validates :name, uniqueness: true, presence: true
end
