import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import anOldHope from 'react-syntax-highlighter/dist/esm/styles/hljs/an-old-hope'

SyntaxHighlighter.registerLanguage('javascript', json)

const DebugStyled = styled.div`
  font-size: 2em;
`

const Debug = ({ data }) => {
  return (
    <DebugStyled>
      <SyntaxHighlighter language='json' style={anOldHope}>
        {JSON.stringify(data, null, 2)}
      </SyntaxHighlighter>
    </DebugStyled>
  )
}

Debug.propTypes = {
  data: PropTypes.any
}

export default Debug
