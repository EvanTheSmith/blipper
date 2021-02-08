export const fetchBlips = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch('http://localhost:3000/blips')
    .then(response => response.json())
    .then(blips => dispatch({ type: 'ADD_BLIPS', blips }));
  };
}

export const postBlip = (payload) => {
  return { type: 'POST_BLIP', payload }
}