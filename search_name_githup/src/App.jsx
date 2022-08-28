import React, { Component } from 'react'
import Search from './Seach'
import List from './List'

export default class App extends Component {
  // 初始化state
  state = {
    dataList:[],
    isFirst:true, 
    isLoading:false,
    err: '', // 存储请求相关错误信息
  }
  returnDate = (appObj) =>{
    this.setState(appObj);
    console.log(appObj,'--appObj111---');
  }
  render() {
    console.log(this.state,'---thisState---');
    return (
      <div>
        <Search returnDate = {this.returnDate}/>
        <List {...this.state}/>
      </div>
    )
  }
}

