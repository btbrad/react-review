import React, { Component } from 'react'
import { Button } from 'antd'

const widthHoc1 = (Com) => {
  return (props)=> {
    return <Com {...props} name="Higher-Order-Component" />
  }
} 

const widthHoc2 = (Com) => {
  return class extends Component {
    render() {
      return <Com {...this.props} />
    }
    componentDidMount() {
      console.log('组件挂载了', this.props)
    }
  }
}


@widthHoc1
@widthHoc2
class Test extends Component {
  render() {
    return (
      <div className="App">
        <h2>hi, {this.props.name}</h2>
        <Button type="primary">Button</Button>
      </div>
    )
  }
}

// export default widthHoc2(widthHoc1(Test))
export default Test
