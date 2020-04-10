import { call, put, takeEvery} from 'redux-saga/effects'

// 模拟登录
const UserService = {
  login(uname) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (uname === 'admin') {
          resolve({id: 1, name: 'admin', age: 20})
        } else {
          reject("用户名或密码错误")
        }
      }, 1000);
    })
  }
}

// worker saga
function* login(action) {
  try {
    yield put({type: 'requestLogin'})
    const result = yield call(UserService.login, action.uname)
    yield put({type: 'loginSuccess', result})
  } catch (message) {
    yield put({type: 'loginFailure', message})
  }
}

function* mySaga() {
  yield takeEvery("login", login)
}

export default mySaga
