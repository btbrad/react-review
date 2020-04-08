import React from 'react'

const Api = {
  getUser: {
    name: 'Tom',
    age: 23
  }
}

function Fetcher(props) {
  const data = Api[props.name]
  return props.children(data)
}

function Test() {
  return <Fetcher name="getUser">
    {
      ({name, age}) => (
        <div>{name}---{age}</div>
      )
    }
  </Fetcher>
}

export default Test