import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const Heading = styled.h1`
  margin: 50;
  font-size: 48;
  text-align: center;
  color: text;
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
