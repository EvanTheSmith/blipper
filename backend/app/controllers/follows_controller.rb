class FollowsController < ApplicationController
    def create
      follower = User.find_by(id: params[:follower])
      followed_user = User.find_by(id: params[:follow])
      
      follow = Follow.create(follower: follower, followed_user: followed_user)

      users = [follower, followed_user]
      render json: UserSerializer.new(users).to_serialized_json
    end

    def destroy
      follower = User.find_by(id: params[:follower])
      followed_user = User.find_by(id: params[:follow])

      follow = Follow.find{|x| x.follower_id == follower.id && x.followed_user_id == followed_user.id}
      follow.destroy

      users = [follower, followed_user]
      render json: UserSerializer.new(users).to_serialized_json
    end
end