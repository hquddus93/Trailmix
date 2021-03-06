Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] #:show?
    resource :session, only: [:create, :destroy]
    
    resources :videos, only: [:index, :show] do
      resources :previous_views, only: [:create]
      resource :list, only: [:create, :destroy, :index]
    end
    
    resources :genres, only: [:index, :show]
    resources :shows, only: [:show]

  end
end
