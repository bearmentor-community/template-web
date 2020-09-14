import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { AnimatePresence } from 'framer-motion'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

import { history } from '../redux/store'
import { ScrollToTop, GoogleAnalytics } from '../containers'

const PageAbout = loadable(() => import('../pages/PageAbout'))
const PageDebug = loadable(() => import('../pages/PageDebug'))
const PageHome = loadable(() => import('../pages/PageHome'))
const PageItem = loadable(() => import('../pages/PageItem'))
const PageItems = loadable(() => import('../pages/PageItems'))
const PageLogin = loadable(() => import('../pages/PageLogin'))
const PageLogout = loadable(() => import('../pages/PageLogout'))
const PageNotFound = loadable(() => import('../pages/PageNotFound'))
const PageRegister = loadable(() => import('../pages/PageRegister'))
const PageSearch = loadable(() => import('../pages/PageSearch'))
const PageUsers = loadable(() => import('../pages/PageUsers'))
const PageUserSettings = loadable(() => import('../pages/PageUserSettings'))
const PageUserProfile = loadable(() => import('../pages/PageUserProfile'))
const PageUpload = loadable(() => import('../pages/PageUpload'))

const RouterContainer = () => {
  return (
    <ConnectedRouter history={history}>
      <>
        <ScrollToTop />

        {GoogleAnalytics.init() && <GoogleAnalytics.RouteTracker />}

        <AnimatePresence>
          <Switch>
            {process.env.NODE_ENV === 'development' && (
              <Route path='/debug' component={PageDebug} />
            )}
            {process.env.NODE_ENV === 'development' && (
              <Route path='/upload' component={PageUpload} />
            )}

            <Route exact path='/' component={PageHome} />
            <Route path='/about' component={PageAbout} />
            <Route path='/users' component={PageUsers} />
            <Route exact path='/items' component={PageItems} />
            <Route path='/items/:slug' component={PageItem} />
            <Route path='/search' component={PageSearch} />
            <Route path='/register' component={PageRegister} />
            <Route path='/login' component={PageLogin} />
            <Route path='/logout' component={PageLogout} />
            <Route path='/settings' component={PageUserSettings} />
            <Route path='/:slug' component={PageUserProfile} />
            <Route key={'/404.html'} component={PageNotFound} />
          </Switch>
        </AnimatePresence>
      </>
    </ConnectedRouter>
  )
}

export default RouterContainer
