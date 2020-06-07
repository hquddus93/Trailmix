@videos.each do |video|
    # debugger
    json.set! video.id do
        json.extract! video, :id, :title, :description, :rating, :year, :director_name, :season_id
        json.videoUrl url_for(video.url) if video.url.attached?
        json.genres video.genres.pluck(:genre)
    end
end

# json.extract! "hello" 

