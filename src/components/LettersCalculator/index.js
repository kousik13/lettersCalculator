// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersComplete extends Component {
  state = {
    value: 0,
  }

  onChangeSearchInput = event => {
    const typevalue = event.target.value

    this.setState({
      value: typevalue.length,
    })
  }

  render() {
    const {value} = this.state
    return (
      <div className="background-container">
        <div className="text-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="f" className="description">
            Enter the phrase
          </label>
          <br />
          <input
            className="type"
            onChange={this.onChangeSearchInput}
            placeholder="Enter the phrase"
            type="text"
          />

          <div>
            <p className="button">No.of letters: {value}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            alt="letters calculator"
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersComplete
