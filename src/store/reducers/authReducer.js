const defaultState = {
  token: null,
  user: {

  },
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'SIGNUP': 
      return {
        ...state,
        signupInfo: action.payload
      }
    case 'LOGIN': 
      return {
        ...state,
        loginInfo: action.payload
      }
    default:
      return state;
  }
}

export default auth;