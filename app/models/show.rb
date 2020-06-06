class Show < ApplicationRecord

    validates :name, :plot, presence: true
    
    has_many :seasons,
    class_name: :Season,
    foreign_key: :show_id

    has_many :videos, 
    through: :seasons,
    source: :videos



end