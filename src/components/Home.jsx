import React, {Component} from 'react'


class Home extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    
    return (
      <div className = 'main'>
        <header>
          首页头部
        </header>
        <div className = 'content'>
          首页
        </div>
      </div>
    )
  }
}

export default Home
