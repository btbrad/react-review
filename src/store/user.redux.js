const initialState = {
  isLogin: false,
  loading: false,
  error: ''
}


export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'requestLogin': 
      return {
        isLogin: false,
        loading: true,
        error: ''
      }
    case 'loginSuccess': 
      return {
        isLogin: true,
        loading: false,
        error: ''
      }
    case 'loginFailure': 
      return {
        isLogin: false,
        loading: false,
        error: action.message
      }
    default: 
      return state
  }
}

// export const login = () => dispatch => {
//     dispatch({type: 'requestLogin'})
//     setTimeout(() => {
//       dispatch({type: 'login'})
//     }, 2000);
// }

export function login(uname) {
  return {type: 'login', uname}
}
