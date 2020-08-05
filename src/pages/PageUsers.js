import React from 'react'

import { Page, Hero } from '../components'
import { UsersContainer } from '../containers'

const PageUsers = () => {
  return (
    <Page title='Users'>
      <Hero heading='List of registered users' />
      <UsersContainer />
    </Page>
  )
}

export default PageUsers
