class LikesController < ApplicationController
    def create
      liker = User.find_by(id: params[:user])
      liked_blip = Blip.find_by(id: params[:blip])
      
      like = Like.create(liker: liker, liked_blip: liked_blip)

      render json: {blip: liked_blip}
      # UserSerializer.new(users).to_serialized_json ( I probably won't use a serializer for this)
    end

    def destroy
      unliked_blip = Blip.find_by(id: params[:blip])

      like = Like.find{|x| x.user_id == params[:user] && x.blip_id == params[:blip]}
      like.destroy

      render json: {blip: unliked_blip}
    end
end