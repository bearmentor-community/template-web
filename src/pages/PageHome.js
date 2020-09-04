import React from 'react'

import { Page, Hero, Link } from '../components'

const PageHome = () => {
  return (
    <Page>
      <Hero heading='Welcome to Template' />
      <h2>Quick starter kit project to build a complete web app</h2>
      <p>
        The technologies and tools are using JavaScript, Node.js, React, Redux,
        Express, MongoDB, PostgreSQL, REST API. Also deployment using PM2,
        Netlify, PM2, Google Cloud Platform, Nginx, Let's Encrypt, Cloudflare,
        and Uniregistry.
      </p>
      <p>
        <Link to='/about'>Visit about page to learn more</Link>
      </p>
    </Page>
  )
}

export default PageHome
