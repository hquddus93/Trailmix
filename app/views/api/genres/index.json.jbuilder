@genres.each do |genre|
    # json.set! genre.genre do 
        json.extract! genre, :video_id
        
    end
end