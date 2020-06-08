class Api::ListsController < ApplicationController
    def create
        @list=[]
        list_video = Video.find(params[:videoId])
        if list_video 
            @list << list_video
        else
            render json: ['Video does not exist :('], status: 404
        end
    end

    def index
        @list = currentUser.list
    end

    def destroy
        @list = currentUser.list
        list_video = Video.find(params[:videoId])
        if list_video && @list.inlcude?(list_video)
            @list.delete(list_video)
        else
            render json: ['Video does not exist on your list :('], status: 404
        end
        
    end
end