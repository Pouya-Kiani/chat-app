export const Signup = () => {
  return dispatch => {
    console.log('Signup function running');
    var payload = {message: 'Hello from signup function'}
    dispatch({
      type: 'SIGNUP',
      payload
    });
  }
}

export const Login = (loginInfo) => {
  return dispatch => {
    console.log('Login function running', loginInfo);
    dispatch({
      type: 'LOGIN',
      payload: loginInfo
    })
  }
}

export const logOut = () => {
  return dispatch => {
    dispatch({
      type: 'LOGOUT',
      payload: null
    })
  }
}

export const loggedIn = (data) => {
  return dispatch => {
    dispatch({
      type: 'LOGGEDIN',
      payload: data
    })
  }
}