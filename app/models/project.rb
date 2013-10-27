class Project < ActiveRecord::Base
  attr_accessible :body, :name, :title

  has_many :comments
end
