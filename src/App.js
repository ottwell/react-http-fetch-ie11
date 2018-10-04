import React, { Component } from 'react'
import './App.css'
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();


class App extends Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
      </div>
    )
  }


  handleClick () {
    window.fetch('https://api.github.com/users/ottwell').then(response => response.json()).then(data => console.log(data));
  }
}
export default App