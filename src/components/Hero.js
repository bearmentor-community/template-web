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
      margin-bottom: 10px;
      font-size: 1.8em;
    `,
    sm: css`
      font-size: 2em;
    `,
    md: css`
      margin-bottom: 50px;
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
