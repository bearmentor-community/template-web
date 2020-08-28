import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LinkAvatarStyled = styled(Link)`
  span {
    display: block !important;
    /* so it is vertically aligned inside anchor */
  }
`

const AvatarImage = styled(LazyLoadImage)`
  object-fit: cover;
  border-radius: 50%;
`

const LinkAvatar = ({ to = '/', user }) => {
  return (
    <LinkAvatarStyled to={to}>
      <AvatarImage
        placeholderSrc='/assets/images/placeholder.png'
        effect='blur'
        src={user.avatarUrl}
        alt='Avatar'
        height={32}
        width={32}
      />
    </LinkAvatarStyled>
  )
}

LinkAvatar.propTypes = {
  to: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired
}

export default LinkAvatar
