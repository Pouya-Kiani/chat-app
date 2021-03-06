
import * as AuthActions from './authActions'
export const setupSocket = (token, userId) => {
  return dispatch => {
    const socket = new WebSocket('ws://localhost:8085');
    socket.onopen = () => {
      if(token) {
        socket.send(JSON.stringify({
          type: 'CONNECT_WITH_TOKEN',
          data: {
            token,
            userId,
          }
        }))
      }
      dispatch({
        type: 'SETUP_SOCKET',
        payload: socket
      });
    };
    socket.onmessage = (message) => {
      let data = JSON.parse(message.data);
      switch (data.type) {
        case 'LOGGEDIN':
          dispatch(AuthActions.loggedIn(data.data))
        break;
        case 'SEARCH_RESULTS':
          var payload = null
          if(data.data.length > 0) {
            payload = data.data;
          } else {
            console.log('No user found; ', data.data.length);
          }
          dispatch({
            type: 'GOT_USERS',
            payload
          })
          break;
        case 'ADD_THREAD': 
          dispatch({
            type: 'ADD_THREAD',
            payload: data.data,
          })
          break;
        case 'INITIAL_THREADS':
          dispatch({
            type: 'INITIAL_THREADS',
            payload: data.data,
          })
          break;
        default:
          // Do nothing
          break;
      }
    };
    socket.onclose = () => {
      console.log('Connection closed');
      dispatch({
        type: 'CLOSED_SOCKET',
        payload: null
      });
    }
  }
}

export const search = (keyword, socket) => {
  return dispatch => {
    socket.send(JSON.stringify({
      type: 'SEARCH',
      data: { keyword} 
    }))
    dispatch({
      type: 'SEARCH',
      payload: null
    });
  }
  }