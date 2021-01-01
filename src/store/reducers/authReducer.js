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
    case 'LOGGEDIN':
      return {
        ...state,
        token: action.payload.session.id,
        user: action.payload.user
      }
    case 'LOGOUT':
      return {
        ...state,
        ...defaultState
      }
    default:
      return state;
  }
}

export default auth;