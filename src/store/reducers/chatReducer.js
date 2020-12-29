const defaultState = {
  socket: null, 
  message: '',
  threads: {}, 
  currentThread: ''
};

const chat = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default chat;