import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Avatar } from '../components'

const UserStyled = styled.div`
  display: flex;
  padding: 15px;
  margin: 10px 0;
  background-color: background;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  border-color: backgroundAlt;
  transition: inherit;
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
  margin-bottom: 0.1rem;
`

const Username = styled.span`
  color: secondary;
`

const Bio = styled.span`
  margin-top: 1rem;
`

const User = ({ user, isYou }) => {
  return (
    <UserStyled>
      <Avatar user={user} size={50} />
      <Info>
        <SubInfo>
          <Name>
            <span>{user.name}</span>
            {isYou && <span>(You)</span>}
          </Name>
          <Username>@{user.username}</Username>
        </SubInfo>
        <SubInfo>
          <Bio>{user.bio}</Bio>
        </SubInfo>
      </Info>
    </UserStyled>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  isYou: PropTypes.bool
}

export default User
