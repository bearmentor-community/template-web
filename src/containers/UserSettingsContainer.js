import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import dayjs from 'dayjs'

import { UserSettingsForm, Alert } from '../components'

const UserSettingsContainer = ({
  isLoading,
  user,
  error,
  handleUpdateUserSettings,
  handleGetAuthenticatedUser
}) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      username: user.username,
      bio: user.bio,
      email: user.email
    }
  })

  const submitData = async (data) => {
    await handleUpdateUserSettings(data)
    handleGetAuthenticatedUser()
    // Get last updated authenticated user after update user settings completed
  }

  return (
    <>
      {!isLoading && user && (
        <>
          <UserSettingsForm
            isLoading={isLoading}
            user={user}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            submitData={submitData}
          />

          <Alert variant='info'>
            Joined since{' '}
            {dayjs(user.createdAt).format('D MMMM YYYY [at] HH:mm')}
          </Alert>
          <Alert variant='info'>
            Last updated{' '}
            {dayjs(user.updatedAt).format('D MMMM YYYY [at] HH:mm')}
          </Alert>
        </>
      )}
    </>
  )
}

UserSettingsContainer.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  error: PropTypes.object,
  handleUpdateUserSettings: PropTypes.func.isRequired,
  handleGetAuthenticatedUser: PropTypes.func.isRequired
}

export default UserSettingsContainer
