Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do 
      resource :list, only: [:show, :create, :destroy]
      resources :previous_views, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :show]
    resources :genres, only: [:index, :show]
    resources :shows, only: [:show]

  end
end
