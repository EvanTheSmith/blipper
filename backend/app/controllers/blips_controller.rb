class BlipsController < ApplicationController
    def index
      blips = Blip.all
      render json: BlipSerializer.new(blips).to_serialized_json
    end
end