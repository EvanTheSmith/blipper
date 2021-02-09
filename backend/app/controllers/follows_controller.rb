class FollowsController < ApplicationController
    def create
      follower = User.find_by(id: params[:follower])
      followed_user = User.find_by(id: params[:follow])
      follow = Follow.create(follower: follower, followed_user: followed_user)
      render json: follow, :except => [:created_at, :updated_at]
    end

    def destroy
      follow = Follow.find{|x| x.follower_id == params[:follower] && x.followed_user_id == params[:follow]}
      follow.destroy

      follower = User.find_by(id: params[:follower])
      followed_user = User.find_by(id: params[:follow])

      users = [follower, followed_user]
      render json: UserSerializer.new(users).to_serialized_json
    end
end