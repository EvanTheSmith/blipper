class LikesController < ApplicationController
    def create
      liker = User.find_by(id: params[:user])
      liked_blip = Blip.find_by(id: params[:blip])
      
      like = Like.create(liker: liker, liked_blip: liked_blip)

      update = [liker, liked_blip]
      render json: update
      # UserSerializer.new(users).to_serialized_json ( I probably won't use a serializer for this )
    end

    def destroy
      liker = User.find_by(id: params[:user])
      liked_blip = Blip.find_by(id: params[:blip])

      like= Like.find{|x| x.user_id == params[:user] && x.blip_id == params[:blip]}
      like.destroy

      update = [liker, liked_blip]
      render json: update
    end
end