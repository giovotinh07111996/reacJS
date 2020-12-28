import React, { Component } from 'react'
import { connect } from 'react-redux'
import ListNote from './components/ListNote' 
export class App extends Component {
  render() {
    return (
      <div>
          <div className="container">
            <ListNote />
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
