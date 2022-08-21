import React, { Component } from 'react'
import { Input, Button } from 'antd'
import axios from 'axios'
import './index.css'
export default class Search extends Component {
  //  初始化子state
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
    // 获取数据
    this.props.returnDate({
      isFinite:false,
      isLoading:true,
    });
    axios.get(`https://api.github.com/search/users?q=${serchVlaue}`).then(
      response => {
        this.props.returnDate({
          dataList: response.data.items,
          isLoading: false
        })
      },
      error => {this.props.returnDate({
        isLoading:false,
        err: '请求出错'
      });
      }
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
