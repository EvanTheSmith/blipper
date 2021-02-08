Rails.application.routes.draw do
  get '/users' => 'users#index'
  
  get '/blips' => 'blips#index'
  post '/blips', to: 'blips#create'
end
