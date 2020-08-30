import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const DebugStyled = styled.div``

const Debug = ({ data }) => {
  return (
    <DebugStyled>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </DebugStyled>
  )
}

Debug.propTypes = {
  data: PropTypes.any
}

export default Debug
