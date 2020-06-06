class Video < ApplicationRecord
    validates :director_name, :year, :rating, :description, :title, :url, presence: true
    validates :url, :description, uniqueness: true

    has_many :previous_views,
    class_name: :PreviousView,
    foreign_key: :video_id

    has_many :lists,
    class_name: :List,
    foreign_key: :video_id

    belongs_to :season,
    class_name: :Season,
    foreign_key: :season_id,
    optional: true

    has_many :genres,
    class_name: :Genre,
    foreign_key: :video_id
end