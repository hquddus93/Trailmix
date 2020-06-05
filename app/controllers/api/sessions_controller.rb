class Api::SessionsController < ApplicationController

before_action :ensure_logged_in, only: [:destroy]

  def create
    email = params[:user][:email]
    password = params[:user][:password]
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'

    else
      if email == "" && password = ""
        render json: ["Please enter an email", "Please enter a password"], status: 401
      elsif password == ""
        render json: ["Please enter a password"], status: 401
      elsif email == ""
        render json: ["Please enter an email" ], status: 401
      else 
        render json: ['Invalid email/password combination'], status: 401

      end
    end
  end

  def destroy
      logout 
  end
end
