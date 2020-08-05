import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const AvatarStyled = styled.img`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  background-color: background;
  border-color: primary;
  border-radius: 50%;
`

const Avatar = ({ user, size = 32 }) => {
  return <AvatarStyled src={user.avatarUrl} alt={user.name} size={size} />
}

Avatar.propTypes = {
  user: PropTypes.object,
  size: PropTypes.number
}

export default Avatar
