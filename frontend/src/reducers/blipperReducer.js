const blipperReducer = (state = { user_id: 1, blips: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_BLIPS':
        return {
          ...state,
          blips: [...state.blips],
          loading: true
        }
      case 'ADD_BLIPS':
        return {
          ...state,
          blips: action.blips,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default blipperReducer;