class BlipsController < ApplicationController
    def index
      blips = Blip.all.sort_by(&:created_at).reverse
      render json: BlipSerializer.new(blips).to_serialized_json
    end

    def create
      user = User.find_by(id: params[:user_id]);
      blip = Blip.new(content: params[:content], user: user);

      if blip.save
        # blips = Blip.all.sort_by(&:created_at).reverse
        # render json: BlipSerializer.new(blips).to_serialized_json
        render json: BlipSerializer.new(blip).to_serialized_json
      else
        render json: blip.errors.full_messages;
      end

    end 

end