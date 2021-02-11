export const fetchBlips = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch('http://localhost:3000/blips')
    .then(response => response.json())
    .then(blips => dispatch({ type: 'ADD_BLIPS', blips }));
  };
}

export const postBlip = (payload) => {
  return (dispatch) => {
    // I decided not to trigger my LOADING action for posting/fetching a single blip
    let config = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/blips', config)
    .then(response => response.json())
    .then(blip => blip.id ? dispatch({ type: 'ADD_ONE_BLIP', blip }) : window.alert("Error(s): "+blip) )
  };
}

export const likeBlip = (payload) => {
  return (dispatch) => {
    // I chose not to trigger a LOADING action here
    let config = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/likes', config)
    .then(response => response.json())
    .then(blip => dispatch({ type: 'CHANGE_FOR_LIKE', blip }));
  };
}

export const unlikeBlip = (payload) => {
  return (dispatch) => {
    // I chose not to trigger a LOADING action here
    let config = { method: "DELETE", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/likes', config)
    .then(response => response.json())
    .then(blip => dispatch({ type: 'CHANGE_FOR_LIKE', blip }));
  };
}