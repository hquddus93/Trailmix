class Api::SessionsController < ApplicationController

before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render 'logged in'
    #   render "api/users/show"
    # redirect_to videos_url
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
      logout
      redirect_to 'api/session'
end
