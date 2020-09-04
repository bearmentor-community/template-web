import React from 'react'
import styled from '@xstyled/emotion'

import socials from '../data/socials.json'
import SocialIcon from '../components/icons/SocialIcon'

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: backgroundAlt;
  color: textAlt;
  margin-top: 100;
  padding: 20 0;
`

const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20;
`

const SocialLink = styled.a`
  margin: 0 10px;
  display: flex;
  align-items: center;
`

const Copyright = styled.p`
  margin: 0;
  font-size: 0.8em;
  text-align: center;
`

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <FooterStyled>
      <SocialList>
        {socials.map((social, index) => {
          return (
            <SocialLink key={index} href={social.url} target='_blank'>
              <SocialIcon title={social.title} />
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
