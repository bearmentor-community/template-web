import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

const HeroStyled = styled.section`
  margin-top: 30px;
`

const Heading = styled.h1`
  text-align: center;
  color: text;
  transition: all 0.2s ease-in-out;

  ${breakpoints({
    xs: css`
      padding: 0 20px;
      margin: 30px 0;
      font-size: 2em;
    `,
    sm: css`
      margin: 40px 0;
      font-size: 2.5em;
    `,
    md: css`
      margin: 50px 0;
      font-size: 3em;
    `
  })}
`

const Hero = ({ heading }) => {
  return (
    <HeroStyled>
      <Heading>{heading}</Heading>
    </HeroStyled>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Hero
