import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const AvatarImageContainer = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
`

const AvatarImage = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: background;
  object-fit: cover;
  border-width: 1px;
  border-style: solid;
  border-color: backgroundAlt;
  border-radius: 50%;
`

const Avatar = ({ user, size = 32 }) => {
  return (
    <AvatarImageContainer size={size}>
      <AvatarImage src={user.avatarUrl} alt={user.name} size={size} />
    </AvatarImageContainer>
  )
}

Avatar.propTypes = {
  user: PropTypes.object,
  size: PropTypes.number
}

export default Avatar
