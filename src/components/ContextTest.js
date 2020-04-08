// import React, {useContext} from 'react'
import React from 'react'

const myContext = React.createContext()
// const { Provider, Consumer } = myContext
const { Provider } = myContext


// function Child(props) {
//   const value = useContext(myContext)
//   return <div>
//     child{value.foo}
//   </div>
// }

class Child extends React.Component {
  static contextType = myContext
  render() {
    return (
      <div>child{this.context.foo}</div>
    )
  }
}

export default function App() {

    return (
      <div>
        <Provider value={{foo: 'bar'}}>
          {/* <Consumer> */}
            {/* { value => <Child {...value} />} */}
          {/* </Consumer> */}
          <Child/>
        </Provider>
      </div>
    )

}
