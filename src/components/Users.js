import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { User } from '../components'

const UsersStyled = styled.div`
  width: 100%;
  max-width: 480px;
`

const UserLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: text;
`

const Users = ({ users, auth }) => {
  return (
    <UsersStyled>
      {users.map((user, index) => {
        const isYou = auth.username === user.username

        return (
          <UserLink key={index} to={user.username}>
            <User user={user} isYou={isYou} />
          </UserLink>
        )
      })}
    </UsersStyled>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  auth: PropTypes.object
}

export default Users
