import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { UserSettingsContainer } from '../containers'
import { Page, Section, LoadingSpinner } from '../components'
import { getUserSettings, updateUserSettings } from '../redux/actions/settings'

const PageUserSettings = ({
  isAuthenticated,
  isLoading,
  user,
  handleGetUserSettings,
  handleUpdateUserSettings
}) => {
  useEffect(() => {
    handleGetUserSettings()
  }, [handleGetUserSettings])

  return (
    <Page title='User Settings'>
      <Section>
        {!isAuthenticated && <Redirect to='/' />}
        {isLoading && <LoadingSpinner />}
        {!isLoading && user && (
          <UserSettingsContainer
            isLoading={isLoading}
            user={user}
            handleUpdateUserSettings={handleUpdateUserSettings}
          />
        )}
      </Section>
    </Page>
  )
}

PageUserSettings.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  handleGetUserSettings: PropTypes.func,
  handleUpdateUserSettings: PropTypes.func
}

export default connect(
  (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      isLoading: state.settings.isLoading,
      user: state.settings.data
    }
  },
  (dispatch) => {
    return {
      handleGetUserSettings: () => dispatch(getUserSettings()),
      handleUpdateUserSettings: (data) => dispatch(updateUserSettings(data))
      // Remember to pass the data if the function requires it
    }
  }
)(PageUserSettings)
