import React from 'react'
import styled from '@xstyled/emotion'

import { Page, Hero, Link } from '../components'

const Intro = styled.h2`
  line-height: 2em;
`

const PageHome = () => {
  return (
    <Page>
      <Hero heading='Welcome to Template' />
      <Intro>
        Template is a quick starter kit project to build a complete web app with
        JavaScript, Node.js, React, Redux, Express, MongoDB, PostgreSQL, and
        REST API.
      </Intro>
      <p>
        <Link to='/about'>Visit about page to learn more</Link>
      </p>
    </Page>
  )
}

export default PageHome
