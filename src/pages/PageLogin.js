import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { LoginFormContainer } from '../containers'
import { Page, Hero, Content, Section } from '../components'
import { getAuthenticatedUser } from '../redux/actions/auth'

const PageLogin = ({
  isAuthenticated,
  username,
  handleGetAuthenticatedUser
}) => {
  if (!isAuthenticated) {
    return (
      <Page title='Login'>
        <Hero heading='Login to your account' />

        <Content>
          <Section>
            <LoginFormContainer />
          </Section>
        </Content>
      </Page>
    )
  } else {
    isAuthenticated && handleGetAuthenticatedUser()
    return <Redirect to={username} />
  }
}

PageLogin.propTypes = {
  isAuthenticated: PropTypes.bool,
  username: PropTypes.string
}

export default connect(
  (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      username: state.auth.data.user ? state.auth.data.user.username : ''
    }
  },
  (dispatch) => {
    return {
      handleGetAuthenticatedUser: () => dispatch(getAuthenticatedUser())
    }
  }
)(PageLogin)
