import React from 'react'
import PropTypes from 'prop-types'
import { breakpoints } from '@xstyled/system'
import styled, { css } from '@xstyled/emotion'

const Heading = styled.h1`
  text-align: center;
  color: text;
  ${breakpoints({
    xs: css`
      margin-bottom: 30px;
      font-size: 2em;
      text-align: left;
    `,
    md: css`
      margin-bottom: 50px;
      font-size: 2.5em;
      text-align: center;
    `,
    lg: css`
      font-size: 3em;
    `
  })}
`

const Hero = ({ heading }) => {
  return (
    <section>
      <Heading>{heading}</Heading>
    </section>
  )
}

Hero.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Hero
