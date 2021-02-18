const blipperReducer = (state = { user_id: 1, blips: [], users: [], loading: false }, action) => {
    let newUsers; let likedBlips;
    switch(action.type) {
      case 'LOADING': // Loading status used for ADD_BLIPS and ADD_USERS
        return {
          ...state,
          blips: [...state.blips],
          users: [...state.users],
          loading: true
        }
      // ALL ACTIONS PERTAINING TO BLIPS ///////////////////////////////
      case 'ADD_BLIPS':
        return {
          ...state,
          blips: action.blips,
          users: [...state.users],
          loading: false
        }
      case 'ADD_ONE_BLIP':
        return {
          ...state,
          blips: [action.blip, ...state.blips],
          users: [...state.users]
        }
      case 'DELETE_BLIP':
        return {
          ...state,
          blips: state.blips.filter(blip => blip.id !== action.blip_id), 
          users: [...state.users]
        } 
      case 'CHANGE_FOR_LIKE': // updates the blip involved in a like/unlike
        likedBlips = state.blips.map(state_blip => (state_blip.id === action.blip.id ? action.blip : state_blip));
        return {
          ...state,
          blips: likedBlips,
          users: [...state.users]
        }
      // ALL ACTIONS PERTAINING TO USERS ///////////////////////////////
      case 'ADD_USERS':
        return {
          ...state,
          blips: [...state.blips],
          users: action.users,
          loading: false
        }
      case 'CHANGE_FOR_FOLLOW': // updates the two users in the store involved in a follow or unfollow
        let { follower, followed_user } = action.users

        newUsers = state.users.map(function(user) {
          if (user.id === follower.id) {return follower};
          if (user.id === followed_user.id) {return followed_user};
          return user;
        })

        return { 
          ...state, 
          blips: [...state.blips], 
          users: newUsers 
        }
      case 'CHANGE_USER': // For testing purposes, this simulates changing the current user
        return {
          ...state,
          blips: [...state.blips],
          users: [...state.users],
          user_id: ++state.user_id
        }
      default:
        return state;
    }
  }
   
  export default blipperReducer;

// case 'RESOLVE_ERROR': // This sets loading back to false after an error message
//   return {
//     ...state,
//     blips: [...state.blips],
//     users: [...state.users],
//     loading: false
//   }