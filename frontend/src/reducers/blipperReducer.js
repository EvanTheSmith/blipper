const blipperReducer = (state = { user_id: 1, blips: [], users: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING':
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
      case 'ADD_USERS':
        return {
          ...state,
          blips: [...state.blips],
          users: action.users,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default blipperReducer;