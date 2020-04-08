import React from 'react'

export default function cartList({data, minus, add}) {
  
  return <table>
    <thead>
      <tr>
        <th>序号</th>
        <th>商品</th>
        <th>价格</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
    </thead>
    <tbody>
      {data && data.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>
            <button onClick={() => {minus(item)}}>-</button>
            {item.quantity}
            <button onClick={() => {add(item)}}>+</button>
          </td>
          <td>{item.price * item.quantity}</td>
          <td></td>
        </tr>
      ))}
    </tbody>
  </table>
}