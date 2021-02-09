class FollowsController < ApplicationController
    def create
      follower = User.find_by(id: params[:follower_id]);
      followed_user = User.find_by(id: params[:followed_id]);
      follow = Follow.new(follower: follower, followed_user: followed_user);
      # users = User.all
      # render json: UserSerializer.new(users).to_serialized_json
    end
end