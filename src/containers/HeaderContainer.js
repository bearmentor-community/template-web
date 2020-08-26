import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Header } from '../components'

import { getAuthenticatedUser } from '../redux/actions/auth'

const HeaderContainer = ({
  isAuthenticated,
  handleGetAuthenticatedUser,
  authenticatedUser
}) => {
  useEffect(() => {
    isAuthenticated && handleGetAuthenticatedUser()
  }, [isAuthenticated, handleGetAuthenticatedUser])

  return (
    <Header
      isAuthenticated={isAuthenticated}
      authenticatedUser={authenticatedUser}
    />
  )
}

HeaderContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.object,
  handleGetAuthenticatedUser: PropTypes.func.isRequired
}

export default connect(
  (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated || false,
      authenticatedUser: state.auth.data.user || {}
    }
  },
  (dispatch) => {
    return {
      handleGetAuthenticatedUser: () => dispatch(getAuthenticatedUser())
    }
  }
)(HeaderContainer)
