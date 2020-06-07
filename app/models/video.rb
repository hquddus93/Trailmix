# == Schema Information
#
# Table name: videos
#
#  id            :bigint           not null, primary key
#  title         :string           not null
#  description   :string           not null
#  rating        :integer          not null
#  director_name :string           not null
#  year          :integer          not null
#  season_id     :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Video < ApplicationRecord
    validates :director_name, :year, :rating, :description, :title, presence: true
    validates :description, uniqueness: true


    has_one_attached :url
    
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
