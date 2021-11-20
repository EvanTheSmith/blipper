export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => dispatch({ type: 'ADD_USERS', users }));
  };
}

export const followUser = (payload) => {
  return (dispatch) => {
    // [ TEST ] - Testing the re-addition of a loading action below:
    dispatch({ type: 'LOADING' });
    // I chose not to trigger a LOADING action here
    let config = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/follows', config)
    .then(response => response.json())
    .then(users => dispatch({ type: 'CHANGE_FOR_FOLLOW', users }));
  };
}

export const unfollowUser = (payload) => {
  return (dispatch) => {
    // [ TEST ] - Testing the re-addition of a loading action below:
    dispatch({ type: 'LOADING' });
    // I chose not to trigger a LOADING action here
    let config = { method: "DELETE", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/follows', config)
    .then(response => response.json())
    .then(users => dispatch({ type: 'CHANGE_FOR_FOLLOW', users }));
  };
}

export const changeUser = () => ({ type: 'CHANGE_USER' })