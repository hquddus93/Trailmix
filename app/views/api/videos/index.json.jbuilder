@videos.each do |video|
    # debugger
    json.set! video.id do
        json.extract! video, :id, :title, :url, :description, :rating, :year, :director_name, :season_id, :genres
    end
end

# json.extract! "hello" 

