class FollowsController < ApplicationController
    def create
      follower = User.find_by(id: params[:follower])
      followed_user = User.find_by(id: params[:follow])
      follow = Follow.create(follower: follower, followed_user: followed_user)
      # render json: UserSerializer.new(users).to_serialized_json
      render json: follow
    end
end