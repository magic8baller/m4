Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: %i[create]
      post '/users', to: 'users#create'
      post '/login', to: 'auth#create'
      get '/profile', to: 'users#show'
      get '/home', to: 'application#welcome'
      
    end
  end
end