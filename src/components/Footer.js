import React from 'react'
import styled from '@xstyled/emotion'

import icons from '../data/socials.json'

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: backgroundAlt;
  color: textAlt;
  margin-top: 200;
  padding: 20 0;
`

const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20;
`

const SocialLink = styled.a`
  margin: 0 10;
`

const SocialImage = styled.img`
  height: 30;
  width: 30;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`

const Copyright = styled.p`
  margin: 0;
  font-size: 1em;
`

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <FooterStyled>
      <SocialList>
        {icons.map((icon, index) => {
          return (
            <SocialLink key={index} href={icon.url} target='_blank'>
              <SocialImage src={icon.imageUrl} alt={icon.title} />
            </SocialLink>
          )
        })}
      </SocialList>
      <Copyright>
        Copyright © {year}{' '}
        <a href='https://github.com/azobu-projects/template'>Template</a> by{' '}
        <a href='https://github.com/azobu-projects'>Azobu Projects</a>
      </Copyright>
    </FooterStyled>
  )
}

export default Footer
