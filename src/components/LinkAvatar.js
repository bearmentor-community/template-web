import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'

const LinkAvatarStyled = styled(Link)``

const AvatarImage = styled.img`
  display: block;
  height: 32px;
  width: 32px;
  background-color: background;
  object-fit: cover;
  border-width: 1px;
  border-style: solid;
  border-color: backgroundAlt;
  border-radius: 50%;
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
