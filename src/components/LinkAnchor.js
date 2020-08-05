import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'
import { Link } from 'react-router-dom'

const LinkAnchorStyled = styled(Link)`
  align-items: center;
  display: flex;
  font-size: 18;
  font-weight: bold;
  text-decoration: none;
  color: text;
  &:hover {
    color: textAlt;
  }
  img {
    margin-right: 10;
  }
`

const LinkAnchor = ({ to, children }) => {
  return <LinkAnchorStyled to={to}>{children}</LinkAnchorStyled>
}

LinkAnchor.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

export default LinkAnchor
