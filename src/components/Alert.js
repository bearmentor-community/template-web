import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const AlertStyled = styled.p`
  color: textError;
  margin: 0;
`

const Alert = ({ children }) => {
  return <AlertStyled>{children}</AlertStyled>
}

Alert.propTypes = {
  children: PropTypes.any.isRequired
}

export default Alert
