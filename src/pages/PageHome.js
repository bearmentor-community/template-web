import React from 'react'

import { Page, Hero, Link } from '../components'

const PageHome = () => {
  return (
    <Page>
      <Hero heading='Welcome to Template' />
      <h2>Template is a starter kit project to build a complete web app.</h2>
      <p>
        <Link to='/about'>Visit about page to learn more</Link>
      </p>
    </Page>
  )
}

export default PageHome
