import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from '@xstyled/emotion'

import { Hero } from '../components'

const NotFoundStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
`

const NotFound = () => {
  const history = useHistory()

  const goBack = () => history.goBack()

  return (
    <>
      <Hero heading='Sorry, this page is not available' />
      <NotFoundStyled>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
        </p>
        <p>
          But you can go to <Link to='/'>homepage</Link> or go back to{' '}
          <a
            href='/'
            onClick={(event) => {
              event.preventDefault()
              goBack()
            }}
          >
            previous page
          </a>
          .
        </p>
      </NotFoundStyled>
    </>
  )
}

export default NotFound
