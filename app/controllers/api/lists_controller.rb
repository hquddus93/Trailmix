class Api::ListsController < ApplicationController
    def create
       listing = List.new(user_id: current_user.id, video_id: params[:video][:id]) 
    #    debugger
        if listing.save 
            # debugger
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
    
        # @mylist = current_user.videos_on_list
        # @mylist.uniq!
        @myList = List.find_by(user_id: current_user.id, video_id: params[:video_id])
        # debugger
        @myList.destroy
        
        # if @mylist 
        #     @mylist.each_with_index do |list_item, idx|
        #         debugger
        #         if list_item.id == params[:video_id]
        #             debugger
        #             # @mylist.delete(list_item)
        #             @mylist[idx] = ""
        #         end
        #     end
        #     @mylist
        #     debugger
        #     render  json: '/api/lists/index'

        
        # head :no_content
        # render  json: '/api/lists/index'
    end
end