import React, {Component} from 'react'

class Detail extends Component {
  constructor (props) {
    super(props)
  }
  
  render () {
    
    return (
      <div className = 'container'>
        <div className = 'main'>
        	<header>
        		Detail头部
        	</header>
        	<div className = 'content'>
        		Detail
        	</div>
        </div>
        <footer>Detail底部</footer>
      </div>
    )
  }
}

export default Detail
