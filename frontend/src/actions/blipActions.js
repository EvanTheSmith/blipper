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
    dispatch({ type: 'LOADING' });
    let config = { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) };
    fetch('http://localhost:3000/blips', config)
    .then(response => response.json())
    .then(function(blip) { console.log(blip);
      if(blip.id) { dispatch({ type: 'ADD_ONE_BLIP', blip }) } 
      else { window.alert("Error(s): "+blip); dispatch({ type: 'RESOLVE_ERROR'}) }
    });

  };
}