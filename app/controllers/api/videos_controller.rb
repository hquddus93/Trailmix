class Api::VideosController < ApplicationController

    def index
        videos = Video.all
       
        if params[:keyword]
            @videos = []
            videos.each do |video|              
                if video.title.downcase.include?(params[:keyword].downcase) || video.director_name.downcase.include?(params[:keyword].downcase) || video.genres.any? {|genre| genre.genre.downcase.include?(params[:keyword].downcase)} ||  (video.show && video.show.name.downcase.include?(params[:keyword].downcase))
                    @videos << video
                end
            end
                if @videos.length == 0 then render json: ['No Search Results Found :('], status: 404
            end
      
        else 
            @videos = Video.all
        end
    end

    def show
        @video = Video.find(params[:id])
        render 'api/videos/show'
    end
end