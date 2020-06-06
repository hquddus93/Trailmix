class Season < ApplicationRecord
    validates :name, presence: true

    has_many :videos,
    class_name: :Video,
    foreign_key: :season_id

    belongs_to :show,
    class_name: :Show,
    foreign_key: :show_id
end