import React from 'react'

import { Page, Hero, Content } from '../components'
import { ItemsContainer } from '../containers'

const PageItems = () => {
  return (
    <Page title='Items'>
      <Hero heading='List of Available Items' />

      <Content>
        <ItemsContainer />
      </Content>
    </Page>
  )
}

export default PageItems
