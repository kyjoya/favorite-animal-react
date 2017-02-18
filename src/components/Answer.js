import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Answer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li onClick={this.props.onClick}>{ this.props.body }</li>
    )
  }
}

export default Answer
