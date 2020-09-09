import React from 'react'

import { UsersContainer } from '../containers'
import { Page, Hero, Content } from '../components'

const PageUsers = () => {
  return (
    <Page title='Users'>
      <Hero heading='List of Registered Users' />

      <Content>
        <UsersContainer />
      </Content>
    </Page>
  )
}

export default PageUsers
