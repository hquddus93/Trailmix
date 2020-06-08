# json.set! @video.id do
    json.extract! @video, :id, :title, :url, :description, :show, :rating, :year, :director_name, :season_id, :genres
# end