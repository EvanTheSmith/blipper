const blipperReducer = (state = { user_id: 1, blips: [], users: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING': // Loading status for any additions to the store
        return {
          ...state,
          blips: [...state.blips],
          users: [...state.users],
          loading: true
        }
        case 'RESOLVE_ERROR': // This sets loading back to false after an error message
          return {
            ...state,
            blips: [...state.blips],
            users: [...state.users],
            loading: false
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
          users: [...state.users],
          loading: false
        }
      case 'ADD_USERS':
        return {
          ...state,
          blips: [...state.blips],
          users: action.users,
          loading: false
        }
        case 'CHANGE_FOR_FOLLOW':
          return {
            ...state,
            blips: [...state.blips],
            users: [...state.users],
            loading: false
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