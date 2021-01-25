/* export const fetchBlips = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_BLIPS' });
    fetch('http://localhost:3000/blips')
    .then(response => response.json())
    .then(blips => dispatch({ type: 'ADD_BLIPS', blips: blips }));
  };
} */

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USERS' });
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => dispatch({ type: 'ADD_USERS', users }));
  };
}