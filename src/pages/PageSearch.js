import React from 'react'

import { SearchContainer } from '../containers'
import { Page, Hero } from '../components'

const PageSearch = () => {
  return (
    <Page title='Search'>
      <Hero heading='Search Items' />
      <SearchContainer />
    </Page>
  )
}

export default PageSearch
