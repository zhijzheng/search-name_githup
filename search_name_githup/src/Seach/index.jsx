import React, { Component } from 'react'
import { Input, Button } from 'antd'
import './index.css'

export default class Search extends Component {
    
  render() {
    return (
      <div>
        <Input/>
        <Button>搜索</Button>
      </div>
    )
  }
}
