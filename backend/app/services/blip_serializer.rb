class BlipSerializer
  def initialize(blip_object)
    @blip = blip_object
  end

  def to_serialized_json
    @blip.to_json(:include => [
      {:user => {:only => [:id, :username]}}, 
      {:likers => {:only => [:id, :username]}}],  
    :except => [:updated_at])
  end
    
end