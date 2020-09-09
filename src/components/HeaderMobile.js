import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { ColorModeToggle } from '../containers'
import { LinkAnchor, LinkAvatar, LinkButton } from '../components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const HeaderSegment = styled.div`
  display: flex;
  align-items: center;
`

const HeaderSegmentButtons = styled.div`
  display: flex;
  align-items: center;
  a {
    margin-left: 10px;
  }
`

const Logo = styled.span`
  display: flex;
  align-items: center;
  transition: inherit;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`

const LogoImage = styled.img`
  height: 40;
`

const HeaderMobile = ({ isAuthenticated, authenticatedUser }) => {
  return (
    <HeaderStyled>
      <HeaderSegment>
        <LinkAnchor to='/'>
          <Logo>
            <LogoImage src='/assets/images/icon.svg' alt='Logo' />
          </Logo>
        </LinkAnchor>
      </HeaderSegment>

      <HeaderSegmentButtons>
        <ColorModeToggle />

        {!isAuthenticated && (
          <>
            <LinkButton variant='secondary' to='/login'>
              Login
            </LinkButton>
          </>
        )}

        {isAuthenticated && authenticatedUser.username && (
          <LinkAvatar
            to={`/${authenticatedUser.username}`}
            user={authenticatedUser}
          />
        )}
      </HeaderSegmentButtons>
    </HeaderStyled>
  )
}

HeaderMobile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.object
}

export default HeaderMobile
