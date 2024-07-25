import React, { Component } from 'react'
import Ghost from './Ghost.gif'

export default class Loading extends Component {
  render() {
    return (
      <div className=' d-flex align-items-sm-center justify-content-center' style={{height:"70vh"}}>
        <img src={Ghost} alt="Loading" />
      </div>
    )
  }
}
