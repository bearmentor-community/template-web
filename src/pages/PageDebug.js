import React from 'react'

import { Page, Hero } from '../components'
import { DebugContainer } from '../containers'

const PageDebug = () => {
  return (
    <Page title='Debug'>
      <Hero heading='Debug Mode' />
      <DebugContainer />
    </Page>
  )
}

export default PageDebug
