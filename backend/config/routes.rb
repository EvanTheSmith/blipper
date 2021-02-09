Rails.application.routes.draw do
  get '/users' => 'users#index'
  
  get '/blips' => 'blips#index'
  post '/blips', to: 'blips#create'

  post '/follows', to: 'follows#create' # When a User is followed
  delete '/follows', to: 'follows#destroy' # When a User is unfollowed
end
