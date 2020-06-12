class Api::ListsController < ApplicationController
    def create
       listing = List.new(user_id: current_user.id, video_id: params[:video][:id]) 
    
        if listing.save 
         
            @mylist = listing
            render '/api/lists/index'
        else
            render json: ['Video does not exist :('], status: 404
        end
    end

    def index
        @mylist = current_user.mylist
    end

    def destroy
    
      
        @myList = List.find_by(user_id: current_user.id, video_id: params[:video_id])
        
        @myList.destroy

    end
end