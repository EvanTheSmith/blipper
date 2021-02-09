export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => dispatch({ type: 'ADD_USERS', users }));
  };
}

export const followUser = (payload) => { // WORK IN PROGRESS ACTION
  return (dispatch) => {
    // dispatch({ type: 'FOLLOW_USER' });
    let config = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/follows', config)
    .then(response => response.json())
    // .then(user => dispatch({ type: 'FOLLOW_USER', user }));
    .then(user => console.log(user));
  };
}

export const unfollowUser = (payload) => { // WORK IN PROGRESS ACTION
  return (dispatch) => {
    // dispatch({ type: 'FOLLOW_USER' });
    let config = { method: "DELETE", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/follows', config)
    .then(response => response.json())
    // .then(user => dispatch({ type: 'FOLLOW_USER', user }));
    .then(user => console.log(user));
  };
}

export const changeUser = () => {
  return { type: 'CHANGE_USER' };
}