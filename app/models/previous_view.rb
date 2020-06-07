# == Schema Information
#
# Table name: previous_views
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PreviousView < ApplicationRecord

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id


    belongs_to :video,
    class_name: :Video,
    foreign_key: :video_id
end
