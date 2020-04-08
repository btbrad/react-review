import React, { Component } from 'react'
import { Input, Button } from 'antd'

// 创建一个高阶组件： 扩展现有表单，时间处理、数据收集、校验
function FormCreate(Comp) {
  return class extends Component {

    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }

    handleChange = (e) => {
      const {name, value} = e.target
      console.log(name, value)
      this.setState({[name]: value}, () => {
        // 确保值发生变化在校验
        this.validateField(name)
      })
    }

    validateField = (field) => {
      // 1. 获取校验规则
      const rules = this.options[field].rules
      // 任意一项失败则返回false
      const ret = !rules.some(rule => {
        if (rule.required) {
          if (!this.state[field]) {
            // 校验失败了
            this.setState({
              [field+'Message']: rule.message
            })
            return true
          }
        }
      })
      if (ret) {
        this.setState({
          [field+'Message']: ''
        })
      }
      return ret
    }

    // 校验所有字段
    validate = cb => {
      const rets = Object.keys(this.options).map(field => this.validateField(field))
      const ret = rets.every(item => item===true)
      cb(ret, this.state)
    }

    // 创建一个input包装器
    getFieldDecorator = (field, option) => {
      // 保存当前输入项配置
      this.options[field] = option
      return InputComp => (
        <div>
          {
            React.cloneElement(InputComp, {
              name: field,
              value: this.state[field] || '',
              onChange: this.handleChange
            })
          }
          {/* 校验错误信息 */}
          {this.state[field+'Message']&&(
            <p style={{color: '#f40'}}>{this.state[field+'Message']}</p>
          )}
        </div>
      )
    }

    render() {
      return <Comp getFieldDecorator={this.getFieldDecorator} validate={this.validate}></Comp>
    }
  }
}

@FormCreate
class myForm extends Component {

  onSubmit = () => {
    console.log('submit')
    // 校验所有项目
    this.props.validate((valid, data)=>{
      if (valid) {
        // 提交登录
        console.log('登录: ', data)
      } else {
        alert('校验失败')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props
    return (
      <div>
        {
          getFieldDecorator('uname', {
            rules: [{required: true, message: '用户名必填'}] 
          })(<Input />)
        }
        {
          getFieldDecorator('pass', {
            rules: [{required: true, message: '密码必填'}] 
          })(<Input type="password" />)
        }
        <Button type="primary" onClick={this.onSubmit}>登录</Button>
      </div>
    )
  }

}

export default myForm