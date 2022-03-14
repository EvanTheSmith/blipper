Rails.application.routes.draw do
  get '/users' => 'users#index'
  
  get '/blips' => 'blips#index' # Get ALL the blips (old method)
  get '/profile_blips' => 'blips#profile' # Get one user's blips only
  post '/blips', to: 'blips#create'
  delete '/blips/:id', to: 'blips#destroy' # Delete a Blip
  
  post '/follows', to: 'follows#create' # When a User is followed
  delete '/follows', to: 'follows#destroy' # When a User is unfollowed

  post '/likes', to: 'likes#create' # When a Blip is liked
  delete '/likes', to: 'likes#destroy' # When a Blip is unliked
end
