# == Schema Information
#
# Table name: shows
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  plot       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Show < ApplicationRecord

    validates :name, :plot, presence: true
    
    has_many :seasons,
    class_name: :Season,
    foreign_key: :show_id

    has_many :videos, 
    through: :seasons,
    source: :videos



end
