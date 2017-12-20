import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'

const Layout = ({children}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <ul>
        <li><Link to="/first">First</Link></li>
        <li><Link to="/second">Second</Link></li>
      </ul>
      {children}
      <footer>this is footer!</footer>
    </div>
  )
}

export default Layout