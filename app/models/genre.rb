# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  genre      :string           not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
validates :genre, presence: true

    belongs_to :video,
    class_name: :Video,
    foreign_key: :video_id
    
    attr_reader :genre_videos

    # def videos_of_the_same_genre 
    #     videos_of_the_same_genre = {}
    #     if videos_of_the_same_genre[self.genre] 
    #         videos_of_the_same_genre[self.genre].push(self.genre.video_id) 
    #     else
    #         videos_of_the_same_genre[self.genre] = [self.genre.video_id]
    #     end

    #     @genre_videos = Hash.values(videos_of_the_same_genre)

    # end

end
