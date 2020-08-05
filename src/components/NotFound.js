import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { Hero } from '../components'

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50;
  p {
    text-align: center;
  }
`

const NotFound = () => {
  return (
    <>
      <Hero heading='Sorry, this page is not available' />
      <NotFoundStyled>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
        </p>
        <p>
          But you can <Link to='/'>go back to homepage</Link>.
        </p>
      </NotFoundStyled>
    </>
  )
}

export default NotFound
