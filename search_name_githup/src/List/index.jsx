import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {dataList,isFirst,isLoading,err } = this.props

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
