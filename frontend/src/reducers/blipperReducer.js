const blipperReducer = (state = { user_id: 1, blips: [], users: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING': // Loading status for any BIG additions to the store
        return {
          ...state,
          blips: [...state.blips],
          users: [...state.users],
          loading: true
        }
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
      case 'ADD_USERS':
        return {
          ...state,
          blips: [...state.blips],
          users: action.users,
          loading: false
        }
        case 'CHANGE_FOR_FOLLOW': // this action updates the two users in the store involved in a follow or unfollow
          let follower = action.users[0];
          let followed = action.users[1];
          let { users } = state; let idx; let newUsers;

          idx = users.findIndex(user => user.id === follower.id)
          newUsers = [...users.slice(0, idx), follower, ...users.slice(idx + 1)];
          idx = users.findIndex(user => user.id === followed.id)
          newUsers = [...newUsers.slice(0, idx), followed, ...newUsers.slice(idx + 1)];

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