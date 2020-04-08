import React from 'react'

function Filter({children, type}) {
  return (
    <div>
      { React.Children.map(children, child => {
        if (child.type === type) {
          return child
        } else {
          return ''
        }
      }) }
    </div>
  )
}

function Test() {
  return (
    <Filter type="p">
      <p>鸭子</p>
      <div>小猪</div>
      <div>藏獒</div>
    </Filter>
  )
}

export default Test
