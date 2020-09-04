import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript'
import anOldHope from 'react-syntax-highlighter/dist/cjs/styles/hljs/an-old-hope'

SyntaxHighlighter.registerLanguage('javascript', javascript)

const DebugStyled = styled.div`
  font-size: 1.2em;
  pre {
    border-radius: 5px;
    white-space: pre-wrap;
  }
`

const Debug = ({ data }) => {
  return (
    <DebugStyled>
      {process.env.NODE_ENV === 'development' ? (
        <SyntaxHighlighter
          language='json'
          style={anOldHope}
          showLineNumbers
          showInlineLineNumbers
        >
          {JSON.stringify(data, null, 2)}
        </SyntaxHighlighter>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </DebugStyled>
  )
}

Debug.propTypes = {
  data: PropTypes.any
}

export default Debug
