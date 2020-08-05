import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import styled from '@xstyled/emotion'
import dayjs from 'dayjs'
import { DevTool } from '@hookform/devtools'

import { Section, UserSettingsForm } from '../components'

const Error = styled.p`
  color: textError;
  margin-bottom: 20px;
`

const Info = styled.p`
  font-size: 1em;
  margin: 0;
`

const UserSettingsContainer = ({
  isLoading,
  user,
  error,
  handleUpdateUserSettings
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

  const submitData = (data) => {
    handleUpdateUserSettings(data)
  }

  return (
    <Section>
      {error && (
        <Section>
          <Error>There is an error. Please check and try again.</Error>
        </Section>
      )}

      {!isLoading && user && (
        <>
          <UserSettingsForm
            user={user}
            isLoading={isLoading}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            submitData={submitData}
          />
          <Info>
            Joined since {dayjs(user.createdAt).format('DD MMMM YYYY HH:mm')}
          </Info>
          <Info>
            Last updated {dayjs(user.updatedAt).format('DD MMMM YYYY HH:mm')}
          </Info>
        </>
      )}

      {/* Only show React Hook Form DevTool in development */}
      {process.env.NODE_ENV === 'development' && <DevTool control={control} />}
    </Section>
  )
}

UserSettingsContainer.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object,
  error: PropTypes.object,
  handleUpdateUserSettings: PropTypes.func
}

export default UserSettingsContainer
