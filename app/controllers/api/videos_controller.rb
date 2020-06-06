class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        # debugger
        render '/api/videos/index'
    end

    def show
        @video = Video.find(params[:id])
        render 'api/videos/show'
    end
end