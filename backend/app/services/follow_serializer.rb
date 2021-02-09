class FollowSerializer
  def initialize(follow_object)
    @follow = follow_object
  end

  def to_serialized_json
    @follow.to_json(:except => [:updated_at, :created_at])
  end
    
end