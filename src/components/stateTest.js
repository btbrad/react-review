import React, { Component } from 'react'

export default class StateTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  changeState=()=>{
    const {count} = this.state

    this.setState({
      count: count + 1
    })
    this.setState({
      count: count + 1
    })
    this.setState({
      count: count + 1
    })
  }

  componentDidMount() {
    this.changeState()
  }

  render() {
    const {count} = this.state
    return <div>
      <h2>{count}</h2>
    </div>
  }

}