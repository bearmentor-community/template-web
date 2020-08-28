import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { Avatar } from '../components'

const UsersStyled = styled.div`
  width: 480px;
`

const UserLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: text;
`

const User = styled.div`
  display: flex;
  padding: 20px;
  margin: 10px 0;
  background-color: background;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  border-color: backgroundAlt;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: primary;
  }
`

const Info = styled.div`
  margin-left: 20px;
`

const SubInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
`

const Username = styled.span`
  color: secondary;
`

const Bio = styled.span`
  margin-top: 5px;
`

const Users = ({ users, auth }) => {
  return (
    <UsersStyled>
      {users.map((user, index) => {
        return (
          <UserLink key={index} to={user.username}>
            <User>
              <Avatar user={user} size={50} />
              <Info>
                <SubInfo>
                  <Name>{user.name}</Name>
                  <Username>@{user.username}</Username>
                </SubInfo>
                <SubInfo>
                  <Bio>{user.bio}</Bio>
                </SubInfo>
              </Info>
            </User>
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
