import React from 'react'

import { Page, Hero } from '../components'
import { UsersContainer } from '../containers'

const PageUsers = () => {
  return (
    <Page title='Users'>
      <Hero heading='List of Registered Users' />
      <UsersContainer />
    </Page>
  )
}

export default PageUsers
