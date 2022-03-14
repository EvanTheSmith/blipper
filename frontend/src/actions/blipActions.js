export const fetchBlips = (blip_id) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch(`http://localhost:3000/profile_blips/${blip_id}`)
    .then(response => response.json())
    .then(blips => dispatch({ type: 'ADD_BLIPS', blips }));
  };
}

export const postBlip = (payload) => {
  return (dispatch) => {
    // dispatch({ type: 'LOADING' });
    let config = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/blips', config)
    .then(response => response.json())
    .then(blip => blip.id ? dispatch({ type: 'ADD_ONE_BLIP', blip }) : window.alert("Error(s): "+blip) )
  };
}

export const likeBlip = (payload) => {
  return (dispatch) => {
    // dispatch({ type: 'LOADING' });
    let config = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/likes', config)
    .then(response => response.json())
    .then(blip => dispatch({ type: 'CHANGE_FOR_LIKE', blip }));
  };
}

export const unlikeBlip = (payload) => {
  return (dispatch) => {
    // dispatch({ type: 'LOADING' });
    let config = { method: "DELETE", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/likes', config)
    .then(response => response.json())
    .then(blip => dispatch({ type: 'CHANGE_FOR_LIKE', blip }));
  };
}

export const deleteBlip = (blip_id) => {
  return (dispatch) => {
    // dispatch({ type: 'LOADING' });
    fetch(`http://localhost:3000/blips/${blip_id}`, {method: 'DELETE'})
    .then( () => dispatch({ type: 'DELETE_BLIP', blip_id }));
  };
}