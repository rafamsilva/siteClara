import React, { Component } from 'react'
import './TitleComponent.css'

export default class TitleComponent extends Component {
  constructor(props){
      super(props)
  }
  render() {
    return (
      <p className={`titleComponent ${this.props.background}`}>{this.props.title}</p>
    )
  }
}