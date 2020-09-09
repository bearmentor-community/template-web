import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/emotion'
import dayjs from 'dayjs'
import { DevTool } from '@hookform/devtools'

import { UserSettingsForm } from '../components'

const Error = styled.p`
  color: textError;
  margin-bottom: 20px;
`

const Info = styled.p`
  font-size: 0.8em;
  margin: 0;
`

const UserSettingsContainer = ({
  isLoading,
  user,
  error,
  handleUpdateUserSettings,
  handleGetAuthenticatedUser
}) => {
  const { register, handleSubmit, errors, control } = useForm({
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
      {error && (
        <div>
          <Error>There is an error. Please check and try again.</Error>
        </div>
      )}

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
          <Info>
            Joined since{' '}
            {dayjs(user.createdAt).format('D MMMM YYYY [at] HH:mm')}
          </Info>
          <Info>
            Last updated{' '}
            {dayjs(user.updatedAt).format('D MMMM YYYY [at] HH:mm')}
          </Info>
        </>
      )}

      {/* Only show React Hook Form DevTool in development */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
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
