import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  Subscribe = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getbuttonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'subscribe'
  }

  render() {
    return (
      <div className="bg-continer">
        <h1 className="heading"> Welcome</h1>
        <p className="paraa"> Thank you! Happy Learning </p>
        <button className="button" onClick={this.Subscribe} type="button">
          {this.getbuttonText()}
        </button>
      </div>
    )
  }
}
export default Welcome
