import React from 'react'

import { Page, Hero } from '../components'
import { ItemsContainer } from '../containers'

const PageItems = () => {
  return (
    <Page title='Items'>
      <Hero heading='List of Available Items' />
      <ItemsContainer />
    </Page>
  )
}

export default PageItems
