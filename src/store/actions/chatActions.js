export const setupSocket = () => {
  return dispatch => {
    const socket = new WebSocket('ws://localhost:8085');
    socket.onopen = () => {
      dispatch({
        type: 'SETUP_SOCKET',
        payload: socket
      });
    };
  }
}