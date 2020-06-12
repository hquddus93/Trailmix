

@videos.each do |video|
 
    json.set! video.id do
        json.extract! video, :id, :title, :description, :show, :rating, :year, :director_name, :season_id
        json.videoUrl url_for(video.url) if video.url.attached?
        json.photoUrl url_for(video.photo) if video.photo.attached?
        json.genres video.genres.pluck(:genre)
    end
end

# json.extract! "hello" 

