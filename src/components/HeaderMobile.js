import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { LinkAnchor, LinkAvatar, LinkButton } from '../components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20;
`

const HeaderSegment = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.span`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
  opacity: 1;
  &:hover {
    opacity: 0.8;
  }
`

const LogoImage = styled.img`
  height: 30;
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

      <HeaderSegment>
        {!isAuthenticated && (
          <>
            <LinkButton variant='secondary' to='/login'>
              Login
            </LinkButton>
          </>
        )}

        {isAuthenticated && authenticatedUser.username && (
          <>
            <LinkAvatar
              to={`/${authenticatedUser.username}`}
              user={authenticatedUser}
            />
            <LinkButton to='/logout'>Logout</LinkButton>
          </>
        )}
      </HeaderSegment>
    </HeaderStyled>
  )
}

HeaderMobile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.object
}

export default HeaderMobile
