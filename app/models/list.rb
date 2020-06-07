# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    belongs_to :video,
    class_name: :Video,
    foreign_key: :video_id
end
