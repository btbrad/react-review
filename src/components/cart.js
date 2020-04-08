import React, { Component } from 'react'
import CartList from './cartList'

export default class Cart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      goodsList: [
        {
          id: 1,
          name: '西瓜🍉',
          price: 200
        },
        {
          id: 2,
          name: '香蕉🍌',
          price: 400
        },
        {
          id: 3,
          name: '苹果🍎',
          price: 100
        }
      ],
      name: '',
      cart: []
    }
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  addToCart = (good) => {
    const {cart} = this.state
    let newData = [...cart]
    let idx = newData.findIndex(item => item.id === good.id)
    if (idx < 0) {
      newData.push({id: newData.length+1, ...good, quantity: 1})
    } else {
      newData.splice(idx,1, {...newData[idx], quantity: newData[idx].quantity + 1})
    }
    this.setState({
      cart: newData
    })
  }

  minus = (good) => {
    const {cart} = this.state
    let newData = [...cart]
    let idx = newData.findIndex(item => item.id === good.id)
    newData.splice(idx,1, {...newData[idx], quantity: newData[idx].quantity > 1 ?   newData[idx].quantity - 1 : 1})
    this.setState({
      cart: newData
    })
  }

  add = (good) => {
    const {cart} = this.state
    let newData = [...cart]
    let idx = newData.findIndex(item => item.id === good.id)
    newData.splice(idx,1, {...newData[idx], quantity: newData[idx].quantity < 99 ?   newData[idx].quantity + 1 : 99})
    this.setState({
      cart: newData
    })
  }

  addGoods= () => {
    const {name, goodsList} = this.state
    let newList = [...goodsList]
    let isExist = newList.some(item => item.name === name)
    if (isExist) {
      return
    } else {
      newList.push({id: newList.length+1, name, price: 100})
      this.setState({
        goodsList: newList,
        name: ''
      })
    }
  }

  render() {
    const {goodsList, name, cart} = this.state
    const {title} = this.props

    return <div>
      { title ? <h2>{title}</h2> : ''}
      <input type="text" value={name} onChange={this.handleChange} />
      <button onClick={this.addGoods}>添加商品</button>
      <ul>
        {goodsList.map(item => <li key={item.id}>{item.name}----{item.price} <button onClick={()=>{this.addToCart(item)}}>添加至购物车</button></li>)}
      </ul>
      <br/>
      <CartList data={cart} minus={this.minus} add={this.add}/>
    </div>
  }
}
