import React, { Component } from 'react'
import Search from './Seach'
import List from './List'

export default class App extends Component {

  render() {
    return (
      <div>
        <Search/>
        <List/>
      </div>
    )
  }
}

