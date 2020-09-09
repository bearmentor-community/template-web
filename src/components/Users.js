import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { User } from '../components'

const UsersStyled = styled.div`
  max-width: 480px;
  width: 100%;
`

const UserLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: text;
  margin: 10px 0;
  & h1 {
    /* transition: all 0.2s ease-in-out; */
  }
  &:hover h1 {
    color: primary;
  }
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
