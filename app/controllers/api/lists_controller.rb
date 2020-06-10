class Api::ListsController < ApplicationController
    def create
       list = List.new(user_id: current_user.id, video_id: params[:video][:id]) 
        if list.save && !current_user.list.include?(list)
            @list = list
            render '/api/lists/index'
        else
            render json: ['Video does not exist :('], status: 404
        end
    end

    def index
        @list = current_user.list
    end

    def destroy
    
        @list = current_user.list.uniq!
        
        if @list 
            @list.each_with_index do |list_item, idx|
            
                if list_item.video_id == params[:video_id]
                    @list.delete_at(idx)
                end
            end
        else
            render json: ['Video does not exist on your list :('], status: 404
        end
        head :no_content
        # render  json: '/api/lists/index'
    end
end