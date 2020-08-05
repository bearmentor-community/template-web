import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getItems } from '../redux/actions/items'

import { Section, LoadingSpinner, Items } from '../components'

const ItemsContainer = ({ isLoading, handleGetItems, items }) => {
  useEffect(() => {
    handleGetItems()
  }, [handleGetItems])

  return (
    <Section>
      {isLoading && <LoadingSpinner />}
      {!isLoading && items && <Items items={items} />}
    </Section>
  )
}

ItemsContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleGetItems: PropTypes.func.isRequired,
  items: PropTypes.array
}

export default connect(
  (state) => {
    return {
      isLoading: state.items.isLoading,
      items: state.items.data
    }
  },
  (dispatch) => {
    return {
      handleGetItems: () => dispatch(getItems())
    }
  }
)(ItemsContainer)
