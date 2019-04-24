Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]


    resources :playlists, only: [:index, :show, :create, :destroy]
    resources :playlist_songs, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end

  namespace :api, defaults: {format: :json} do

    resources :songs, only: [:index, :show] do
      member do
        post :follow
        delete :unfollow
      end
    end
  end

end
