import React, { Component } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'
import './index.css'
export default class Search extends Component {
  state ={
    inputValue:'',
  }
  //用户输入值
  inputChage=(e) =>{
    this.setState({
      inputValue: e.target.value,
    })

  }
    search=()=>{
    const serchVlaue = this.state.inputValue
    axios.get(`https://api.github.com/search/users?q=${serchVlaue}`).then(
      response => {console.log(response.data,'成功了')},
      error => {console.log(error,'失败了')}
    );

    }
  render() {
    return (
      <div>
        <Input onChange={this.inputChage} value={this.state.inputValue} type='text' placeholder='请输入需查询用户'/>
        <Button onClick={this.search}>搜索</Button>
      </div>
    )
  }
}
