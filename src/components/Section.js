import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = ({ children }) => {
  return <SectionStyled>{children}</SectionStyled>
}

Section.propTypes = {
  children: PropTypes.any.isRequired
}

export default Section
