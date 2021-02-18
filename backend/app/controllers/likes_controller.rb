class LikesController < ApplicationController
    def create
      liker = User.find_by(id: params[:user])
      liked_blip = Blip.find_by(id: params[:blip])
      like = Like.create(liker: liker, liked_blip: liked_blip)

      # Return the affected Blip to update the store:
      render json: BlipSerializer.new(liked_blip).to_serialized_json
    end

    def destroy
      unliked_blip = Blip.find_by(id: params[:blip])
      like = Like.find{|x| x.user_id == params[:user] && x.blip_id == params[:blip]}
      like.destroy

      # Return the affected Blip to update the store:
      render json: BlipSerializer.new(unliked_blip).to_serialized_json
    end
end