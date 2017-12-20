import React from 'react'
import { connect } from 'react-redux'

const First = ({count}) => {
  return (
    <h1>First Page ! {count}</h1>
  )
}

const mapStateToProps = (state) => (state)
export default connect(mapStateToProps)(First)