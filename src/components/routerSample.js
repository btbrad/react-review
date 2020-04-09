import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../store/user.redux'

function Home() {
  return <div>Home</div>
}

function About() {
  return (
    <div>
      About
      <ul>
        <li>
          <Link to="/about/business">经营范围</Link>
        </li>
        <li>
          <Link to="/about/instruction">公司简介</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about/business" component={Business}></Route>
        <Route path="/about/instruction" component={Instruction}></Route>
        <Redirect to="/about/instruction"></Redirect>
      </Switch>
    </div>
  )
}

function Business() {
  return <div>经营范围</div>
}

function Instruction({history}) {
  console.log(history)
  return (
    <div>
      公司简介
      <button onClick={history.goBack}>后退</button>
    </div>
  )
}

function Detail(props) {
  return <div>详细信息: {props.match.params.type}</div>
}

function NoMatch(props) {
  return <div>404, {props.location.pathname}未找到</div>
}

const PrivateRoute = connect(
  state => ({isLogin: state.user.isLogin})
)(
  ({component: Comp, isLogin, Location, ...rest}) => {
    return (
        <div>
          <Route {...rest} 
            // render 根据条件动态渲染组件
            render = {props => isLogin ? <Comp/> : <Redirect to={{pathname: '/login', state: {redirect: props.location.pathname}}} />} />
        </div>
    )
  }
)


const Login = connect(
  state => ({
    isLogin: state.user.isLogin,
    loading: state.user.loading
  }),
  dispatch => ({
    login: () => dispatch(login())
  })
)(
  ({location, isLogin, login, loading}) =>  {
    const redirect = location.state.redirect || '/'
  
    if (isLogin) {
      return <Redirect to={redirect}/>
    }
  
    return (
      <div>
        <p>用户登录</p>
        <hr/>
        <button onClick={login} disabled={loading}>{loading ? '登录中' : '登录' }</button>
      </div>
    )
  }
)


export default  class RouterSample extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/about'>关于</Link>
            </li>
            <li>
              <Link to='/detail'>详细信息</Link>
            </li>
            <li>
              <Link to='/detail/me'>个人中心</Link>
            </li>
            <li>
              <Link to='/detail/order'>我的订单</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <PrivateRoute path="/about" component={About}></PrivateRoute>
            <Route path="/detail/:type" component={Detail}></Route>
            <Route path="/login" component={Login}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }

}
