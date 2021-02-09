export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => dispatch({ type: 'ADD_USERS', users }));
  };
}

export const followUser = () => {
  return (dispatch) => {
    // dispatch({ type: 'LOADING_USERS' });
    // fetch('http://localhost:3000/users')
    // .then(response => response.json())
    // .then(users => dispatch({ type: 'ADD_USERS', users }));
  };
}

export const changeUser = () => {
  return { type: 'CHANGE_USER' };
}