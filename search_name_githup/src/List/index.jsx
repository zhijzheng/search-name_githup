import React, { Component } from 'react'

export default class List extends Component {
  render() {
    const {dataList,isFirst,isLoading,err,isFinite } = this.props

    console.log(this.props,'this.propslist');
    return (
      <div className='row'>
       {
        isFirst ? <h2>欢迎使用,请输入关键子,随后点击搜索</h2> : err
       }
      </div>
    )
  }
}
