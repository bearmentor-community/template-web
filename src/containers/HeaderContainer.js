import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Header } from '../components'

const HeaderContainer = ({ isAuthenticated, authenticatedUser }) => {
  return (
    <Header
      isAuthenticated={isAuthenticated}
      authenticatedUser={authenticatedUser}
    />
  )
}

HeaderContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.object
}

export default connect((state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated || false,
    authenticatedUser: state.auth.data.user || {}
  }
})(HeaderContainer)
