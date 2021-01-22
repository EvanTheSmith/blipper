export const fetchBlips = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BLIPS' });
    fetch('')
    .then(response => response.json())
    .then(blips => dispatch({ type: 'ADD_BLIPS', blips: blips }));
  };
}