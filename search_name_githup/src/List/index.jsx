import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class List extends Component {
  //初始化状态
  state={
    dataList:[],
    isFirst:true, 
    isLoading:false,
    err: '',
  }
//页面渲染render前调用
componentDidMount(){
  // 消息订阅
  this.token = Pubsub.subscribe('github',(_,stateObj)=>{
    this.setState(stateObj)
  })
}
//组建卸载前触发
componentWillUnmount(){
  Pubsub.unsubscribe(this.token)
}
  render() {
    const {dataList,isFirst,isLoading,err } = this.state

    console.log(dataList,'this.propslist');
    return (
      <div className='row'>
       {
        isFirst ? <h2>欢迎使用,请输入关键子,随后点击搜索</h2> :
        isLoading ? <h2>loading....</h2> :
        err ? <h2>{err}</h2> :
        dataList.map((dataList)=>{
          return <div key={dataList.id}>
            <a rel='noreferrer' href={dataList.html_url} target="_blank" >
              <img alt='head_portrait' src={dataList.avatar_url}/>
            </a>
            <p>{dataList.login}</p>
          </div>
        })
       }
      </div>
    )
  }
}
