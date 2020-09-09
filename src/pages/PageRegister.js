import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Page, Hero, Content, Section } from '../components'
import { RegisterFormContainer } from '../containers'

const PageRegister = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return (
      <Page title='Register'>
        <Hero heading='Create your new account' />

        <Content>
          <Section>
            <RegisterFormContainer />
          </Section>
        </Content>
      </Page>
    )
  } else {
    return <Redirect to='/login' />
  }
}

PageRegister.propTypes = {
  isAuthenticated: PropTypes.bool
}

export default connect((state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
})(PageRegister)
