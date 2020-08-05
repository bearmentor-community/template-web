import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { Avatar } from '../components'

const UsersStyled = styled.div``

const UserLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: text;
`

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`

const Name = styled.span`
  font-weight: bold;
  margin-left: 10px;
`

const Users = ({ users }) => {
  return (
    <UsersStyled>
      {users ? (
        users.map((user, index) => (
          <UserLink key={index} to={user.username}>
            <Card>
              <Avatar user={user} size={50} />
              <Name>{user.name}</Name>
            </Card>
          </UserLink>
        ))
      ) : (
        <div>
          <p>Users are empty</p>
        </div>
      )}
    </UsersStyled>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
