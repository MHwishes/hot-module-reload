import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import Layout from './Layout'
import {asyncComponent} from 'react-async-component'

const AsyncFirst = asyncComponent({
  resolve: () => import('./pages/First')
});

const AsyncSecond = asyncComponent({
  resolve: () => import('./pages/Second')
});

class App extends Component {

  componentDidMount () {
    window.setTimeout(() => {
      this.props.increase()
    }, 1000)
  }

  render () {
    return (
      <HashRouter>
        <Layout>
          <Route path='/first' component={AsyncFirst} />
          <Route path='/second' component={AsyncSecond} />
        </Layout>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => (state)
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    dispatch({
      type: 'INCREMENT'
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
