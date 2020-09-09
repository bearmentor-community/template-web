import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const ContentStyled = styled.div`
  padding: 10px;
  max-width: 720px;
  width: 100%;
`

const Content = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>
}

Content.propTypes = {
  children: PropTypes.any.isRequired
}

export default Content
