import React, { useState, useEffect } from 'react'

// function useAge() {
//   const [age, setAge] = useState(0)
//   useEffect(() => {
//     setTimeout(() => {
//       setAge(20)
//     }, 2000);
//   }) 
//   return age
// }

export default function HookTest() {
  // useState(initialState), 接收初始状态， 返回一个状态变量和其更新函数
  const [count, setCount] = useState(0)

  // 副作用钩子会在每次渲染后都执行
  useEffect(() => {
    document.title = `您点击了${count}次`
  }, [count])

  // 如果仅打算执行一次， 传递第二个参数为[]
  useEffect(() => {
    console.log(`Api调用了`)
  }, [])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
