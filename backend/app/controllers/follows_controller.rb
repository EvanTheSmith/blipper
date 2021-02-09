class FollowsController < ApplicationController
    def create
      follower = User.find_by(id: params[:follower])
      followed_user = User.find_by(id: params[:follow])
      follow = Follow.create(follower: follower, followed_user: followed_user)
      render json: follow, :except => [:created_at, :updated_at]
    end

    def destroy
      # follow = Follow.find(follower_id: params[:follower])

      # follow = Follow.find(follower_id: params[:follower], followed_user_id: params[:follow])
      # render json: follow
      render json: {follower: params[:follower]}
    end
end