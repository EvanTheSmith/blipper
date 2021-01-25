export const fetchBlips = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BLIPS' });
    fetch('http://localhost:3000/blips')
    .then(response => response.json())
    .then(blips => dispatch({ type: 'ADD_BLIPS', blips: blips }));
  };
}