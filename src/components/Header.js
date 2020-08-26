import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { ColorModeToggle } from '../containers'
import { LinkButton, LinkAnchor, LinkAvatar } from '../components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
`

const HeaderSegment = styled.div`
  display: flex;
  align-items: center;
  padding: 10;
  a {
    margin-right: 20;
  }
`

const HeaderSegmentButtons = styled.div`
  display: flex;
  align-items: center;
  padding: 10;
  a {
    margin-left: 10;
  }
`

const Logo = styled.span`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`

const LogoImage = styled.img`
  height: 30;
`

const LogoText = styled.span`
  font-weight: bold;
  color: #8f8fa3;
  padding-right: 30;
`

const Header = ({ isAuthenticated, authenticatedUser }) => {
  return (
    <HeaderStyled>
      <HeaderSegment>
        <LinkAnchor to='/'>
          <Logo>
            <LogoImage src='/assets/images/icon.svg' alt='Logo' />
            <LogoText>Template</LogoText>
          </Logo>
        </LinkAnchor>
        {process.env.NODE_ENV === 'development' && (
          <>
            <LinkAnchor to='/upload-image'>
              <span role='img' aria-label='Upload Image'>
                🖼️
              </span>
            </LinkAnchor>
            <LinkAnchor to='/debug'>
              <span role='img' aria-label='Debug'>
                🐞
              </span>
            </LinkAnchor>
            <LinkAnchor to='/not-found'>
              <span role='img' aria-label='Not Found'>
                🚫
              </span>
            </LinkAnchor>
          </>
        )}
        <LinkAnchor to='/about'>About</LinkAnchor>
        <LinkAnchor to='/users'>Users</LinkAnchor>
        <LinkAnchor to='/items'>Items</LinkAnchor>
      </HeaderSegment>

      <HeaderSegmentButtons>
        <ColorModeToggle />

        {!isAuthenticated && (
          <>
            <LinkButton variant='secondary' to='/login'>
              Login
            </LinkButton>
            <LinkButton variant='primary' to='/register'>
              Register
            </LinkButton>
          </>
        )}
        {isAuthenticated && authenticatedUser.username && (
          <>
            <LinkAvatar
              to={authenticatedUser.username}
              user={authenticatedUser}
            />
            <LinkButton to='/logout'>Logout</LinkButton>
          </>
        )}
      </HeaderSegmentButtons>
    </HeaderStyled>
  )
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.object
}

export default Header
