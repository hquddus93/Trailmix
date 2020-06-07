# == Schema Information
#
# Table name: seasons
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  show_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Season < ApplicationRecord
    validates :name, presence: true

    has_many :videos,
    class_name: :Video,
    foreign_key: :season_id

    belongs_to :show,
    class_name: :Show,
    foreign_key: :show_id
end
