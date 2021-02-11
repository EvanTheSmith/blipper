const blipperReducer = (state = { user_id: 1, blips: [], users: [], loading: false }, action) => {
    let newUsers; let newBlips;
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
        let idx;

        idx = state.users.findIndex(user => user.id === follower.id)
        newUsers = [...state.users.slice(0, idx), follower, ...state.users.slice(idx + 1)];
        idx = state.users.findIndex(user => user.id === followed.id)
        newUsers = [...newUsers.slice(0, idx), followed, ...newUsers.slice(idx + 1)];

        return {
          ...state,
          blips: [...state.blips],
          users: newUsers
        }
      case 'CHANGE_FOR_LIKE': // this action updates the user who likes a blip and the blip they liked in the store involved in a like
        let user = action.data[0];
        let blip = action.data[1];
        let user_idx; let blip_idx;

        user_idx = state.users.findIndex(u => u.id === user.id)
        newUsers = [...state.users.slice(0, user_idx), user, ...state.users.slice(user_idx + 1)];
        blip_idx = state.blips.findIndex(b => b.id === blip.id)
        newBlips = [...state.blips.slice(0, blip_idx), blip, ...state.blips.slice(blip_idx + 1)];

        return {
          ...state,
          blips: newBlips,
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