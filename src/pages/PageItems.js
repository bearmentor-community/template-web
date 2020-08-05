import React from 'react'

import { Page, Hero } from '../components'
import { ItemsContainer } from '../containers'

const PageItems = () => {
  return (
    <Page title='Items'>
      <Hero heading='List of available items' />
      <ItemsContainer />
    </Page>
  )
}

export default PageItems
