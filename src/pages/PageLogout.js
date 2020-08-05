import React from 'react'

import { Page, Hero } from '../components'

import { LogoutContainer } from '../containers'

const PageLogout = () => {
  return (
    <Page title='Logout' header={false} footer={false}>
      <Hero heading='Logout of Template?' />
      <LogoutContainer />
    </Page>
  )
}

export default PageLogout
