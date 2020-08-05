import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth' // register, login, logout
import users from './users' // all users data
import user from './user' // single user data
import settings from './settings' // protected user settings data
import items from './items' // all items data
import images from './images' // all images data

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    users,
    user,
    settings,
    items,
    images
  })

export default createRootReducer
