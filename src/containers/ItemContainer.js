import React from 'react'
import PropTypes from 'prop-types'

import { Item } from '../components'

const ItemContainer = ({ item }) => {
  return <Item item={item} />
}

ItemContainer.propTypes = {
  item: PropTypes.object
}

export default ItemContainer
