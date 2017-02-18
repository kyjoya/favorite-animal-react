import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Answer from './Answer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chosenId: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    this.setState({ chosenId: id })
  }

  render() {
    let response = ""
    let question = this.props.data.question.body
    let answers = this.props.data.answers.map((answer) => {

      let onClick = () => this.handleClick(answer.id)

      if (answer.id === this.state.chosenId) {
        if (answer.correct) {
          response = "You're correct!"
        } else {
          response = "Try again!"
        }
      }

      return(
          <Answer
            key={answer.id}
            id={answer.id}
            body={answer.body}
            onClick={onClick}
          />
        )
    })

    return(
      <div>
        <h1>{ question } </h1>
        <ul>
          { answers }
        </ul>
        { response }
      </div>
    )
  }
}

export default App
