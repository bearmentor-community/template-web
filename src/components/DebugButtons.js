import React from 'react'
import PropTypes from 'prop-types'

import { Buttons, Button } from '../components'

const DebugButtons = ({ handleGetData, handleResetData, isLoading }) => {
  return (
    <div>
      <Buttons>
        <Button onClick={handleGetData}>Get Data</Button>
        <Button onClick={handleResetData}>Reset Data</Button>
        {isLoading && <span>Loading...</span>}
      </Buttons>
    </div>
  )
}

DebugButtons.propTypes = {
  handleGetData: PropTypes.func.isRequired,
  handleResetData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default DebugButtons
