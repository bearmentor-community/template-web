import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { MenuMobile, LinkAnchor, LinkAvatar } from '../components'

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

const Segment = styled.div``

const SegmentButtons = styled.div`
  & > a {
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
  height: 30px;
`

const LogoText = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: secondary;
  margin: 0 5px;
`

const MenuButton = styled.button`
  cursor: pointer;
  background-color: backgroundAlt;
  color: #fff;
  padding: 10px 15px;
  transition: all 0.2s ease-in-out;
  color: text;
  border-color: backgroundAlt;
  &:focus {
    border-color: primary;
  }
`

const HeaderMobile = ({ isAuthenticated, authenticatedUser }) => {
  const [isMenuActive, setIsMenuActive] = useState(false)

  const changeIsMenuActive = () => {
    setIsMenuActive(!isMenuActive)
  }

  return (
    <HeaderStyled>
      <Segment>
        <LinkAnchor to='/'>
          <Logo>
            <LogoImage src='/assets/images/icon.svg' alt='Logo' />
            <LogoText>Template</LogoText>
          </Logo>
        </LinkAnchor>
      </Segment>

      <SegmentButtons>
        <MenuButton variant='transparent' onClick={changeIsMenuActive}>
          ☰
        </MenuButton>

        <MenuMobile
          isActive={isMenuActive}
          isAuthenticated={isAuthenticated}
          authenticatedUser={authenticatedUser}
        />
      </SegmentButtons>
    </HeaderStyled>
  )
}

HeaderMobile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedUser: PropTypes.object
}

export default HeaderMobile
