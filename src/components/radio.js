import React from 'react'

function RadioGroup({children, name}) {
  return (
    <div>
      {
        React.Children.map(children, child => {
          return React.cloneElement(child, {name: name}) // vDom不可更改，克隆一个新的才行
        })
      }
    </div>
  )
    
  
}

function Radio({children, ...rest}) {
  return (
    <label>
      <input type="radio" {...rest}/>
      { children }
    </label>
  )
}


function Test() {
  return <RadioGroup name="mvvm">
    <Radio value="vue">vue</Radio>
    <Radio value="React">React</Radio>
    <Radio value="Angular">Angular</Radio>
  </RadioGroup>
}

export default Test
