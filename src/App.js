import React, { Component } from 'react'
import Cart from './components/cart'
import StateTest from './components/stateTest'
import StateTest2 from './components/stateTest2'
import LifeCycle from './components/lifeCycle'
import { Button } from 'antd'
import TypeTest from './components/typeTest'
import PureComponent from './components/PureComponent'
import Hoc from './components/hoc'
import Composition from './components/composition'
import Fetcher from './components/composition2'
import Filter from './components/filter'
import Radio from './components/radio'
import StateHook from './components/StateHook'
import ContextType from './components/ContextTest'
import MyForm from './components/myForm'
import {increment, decrement, asyncIncrement} from './store/counter.redux'
import { connect } from 'react-redux'
import RouterSample from './components/routerSample'

const mapStateToProps = state => ({
  num: state.counter
})

const mapDispatchToProps = {
  increment,
  decrement,
  asyncIncrement
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {

  state = {
    title: '',
    value: 'block'
  }

  sendProps = () => {
    this.setState({
      title: '生命周期'
    })
  }

  hideCom = () => {
    this.setState({
      value: 'none'
    })
  }

  render() {
    return <div>
      <button>Hello React</button>
      <Cart title="购物车"/>
      <StateTest/>
      <StateTest2 />
      <button onClick={this.sendProps}>test</button>
      <button onClick={this.hideCom}>hide</button>
      <LifeCycle title={this.state.title} style={{display: this.state.value}} />
      <Button type="primary">Button</Button>
      <TypeTest />
      <PureComponent />
      <Hoc />
      <Composition color="#f40" footer={<Button>confirm</Button>} />
      <Fetcher />
      <Filter />
      <Radio />
      <StateHook />
      <ContextType />
      <hr/>
      <MyForm />
      <p>count: {this.props.num}</p>
      <div>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.asyncIncrement}>async+</button>
      </div>
      <RouterSample></RouterSample>
    </div>
  }
}

export default App