import React, { Component } from 'react'

export default class LifeCycle extends Component {
  
  constructor(props) {
    super(props)
    console.log('构造器初始化')
  }

  componentWillMount() {
    console.log('组件将要挂载')
  }

  render() {
    console.log('组件渲染')
    return <h2>React生命周期</h2>
  }

  componentDidMount() {
    console.log('组件挂载完毕')
  }

  shouldComponentUpdate() {
    console.log('组件是否需要更新')
    return true
  }

  componentWillUpdate() {
    console.log('组件将要更新')
  }

  componentDidUpdate() {
    console.log('组件更新了')
  }

  componentWillReceiveProps() {
    console.log('组件将要收到props')
  }

  componentWillUnmount() {
    console.log('组件即将卸载')
  }

}