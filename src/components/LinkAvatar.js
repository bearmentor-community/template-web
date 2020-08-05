import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'

import { Avatar } from '../components'

const LinkAvatarStyled = styled(Link)`
  height: 32px;
`

const LinkAvatar = ({ to = '/', user }) => {
  return (
    <LinkAvatarStyled to={to}>
      <Avatar user={user} />
    </LinkAvatarStyled>
  )
}

LinkAvatar.propTypes = {
  to: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default LinkAvatar
