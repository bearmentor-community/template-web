import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useUp } from '@xstyled/emotion'

import { HeaderDesktop, HeaderMobile } from '../components'

const HeaderContainer = ({ isAuthenticated, authenticatedUser }) => {
  const desktop = useUp('md')

  if (desktop) {
    return (
      <HeaderDesktop
        isAuthenticated={isAuthenticated}
        authenticatedUser={authenticatedUser}
      />
    )
  } else {
    return (
      <HeaderMobile
        isAuthenticated={isAuthenticated}
        authenticatedUser={authenticatedUser}
      />
    )
  }
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
