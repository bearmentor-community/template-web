import React from 'react'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

import { ThemeContainer, RouterContainer } from './containers'
import configureStore from './redux/store'
import { loadState, saveState } from './utils/storage'

/**
 * Create store and synchronize with storage engine
 */

const store = configureStore(loadState())
saveState(store.getState())
store.subscribe(() => {
  saveState(store.getState())
})

/**
 * Setup the root App component
 */

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <ThemeContainer>
            <RouterContainer />
          </ThemeContainer>
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
