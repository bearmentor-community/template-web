import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Avatar, LinkButton } from '../components'

const UserProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled.h1`
  text-align: center;
  font-size: 2em;
  margin-bottom: 5px;
`

const Username = styled.h2`
  margin: 0;
  text-align: center;
  font-weight: normal;
  color: textAlt;
`

const Bio = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.2em;
`

const UserProfile = ({ user, auth }) => {
  const isSameWithAuthenticated = auth.user ? user.id === auth.user.id : false

  return (
    <UserProfileStyled>
      <Profile>
        <Avatar user={user} size={150} />
        <Name>{user.name}</Name>
        <Username>{user.username}</Username>
      </Profile>
      <Bio>{user.bio}</Bio>
      {isSameWithAuthenticated && (
        <LinkButton to='/settings' variant='tertiary'>
          Edit Profile
        </LinkButton>
      )}
    </UserProfileStyled>
  )
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  auth: PropTypes.object
}

export default UserProfile
