class UserSerializer
  def initialize(user_object)
    @user = user_object
  end

  def to_serialized_json
    @user.to_json(:include => [
      {:followers => {:only => [:id, :username]}}, 
      {:followings => {:only => [:id, :username]}}, 
      {:blips => {:only => [:id, :content, :user_id, :created_at]}}], 
    :except => [:updated_at, :created_at])
  end
    
end