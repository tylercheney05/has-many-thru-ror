class Simon < ApplicationRecord
  has_many :dpls, dependent: :destroy
  has_many :users, through: :dpls
end
