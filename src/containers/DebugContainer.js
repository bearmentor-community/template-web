import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { DebugButtons, Debug } from '../components'
import { getItems, resetItems } from '../redux/actions/items'

const DebugContainer = ({
  isLoading,
  handleGetData,
  handleResetData,
  data
}) => {
  useEffect(() => {
    handleGetData()
  }, [handleGetData])

  return (
    <>
      <DebugButtons
        handleGetData={handleGetData}
        handleResetData={handleResetData}
        isLoading={isLoading}
      />
      <Debug data={data} />
    </>
  )
}

DebugContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleGetData: PropTypes.func.isRequired,
  handleResetData: PropTypes.func.isRequired,
  data: PropTypes.any
}

export default connect(
  (state) => {
    return {
      isLoading: state.items.isLoading,
      data: state.items.data
    }
  },
  (dispatch) => {
    return {
      handleGetData: () => dispatch(getItems()),
      handleResetData: () => dispatch(resetItems())
    }
  }
)(DebugContainer)
