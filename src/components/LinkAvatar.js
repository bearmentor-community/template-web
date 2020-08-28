import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'

const LinkAvatarStyled = styled(Link)``

const AvatarImage = styled.img`
  display: block;
  object-fit: cover;
  border-radius: 50%;
  height: 32px;
  width: 32px;
`

const LinkAvatar = ({ to = '/', user }) => {
  return (
    <LinkAvatarStyled to={to}>
      <AvatarImage src={user.avatarUrl} alt='Avatar' />
    </LinkAvatarStyled>
  )
}

LinkAvatar.propTypes = {
  to: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default LinkAvatar
