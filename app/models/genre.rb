class Genre < ApplicationRecord
validates :genre, presence: true, uniqueness: true

    belongs_to :video,
    class_name: :Video,
    foreign_key: :video_id
    
end