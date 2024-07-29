// Write your code here

import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log('button clicked')
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-contener">
        <div className="contaner">
          <h1 className="heading">
            The Button has been clicked
            <span className="span-con">{count}</span> times
          </h1>
          <p className="derpe">Click the button to increase the count!</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
