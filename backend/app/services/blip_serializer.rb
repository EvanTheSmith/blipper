class BlipSerializer
  def initialize(blip_object)
    @blip = blip_object
  end

  def to_serialized_json
    @blip.to_json(:include => [
      {:user => {:only => :id}}, 
      {:likers => {:only => :id}}],  
    :except => [:updated_at, :user_id])
  end
    
end