import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'

SyntaxHighlighter.registerLanguage('javascript', js)

const DebugStyled = styled.div``

const Debug = ({ data }) => {
  return (
    <DebugStyled>
      <SyntaxHighlighter
        language='javascript'
        wrapLines={true}
        showLineNumbers={true}
        style={atomOneDark}
      >
        {JSON.stringify(data, null, 2)}
      </SyntaxHighlighter>
    </DebugStyled>
  )
}

Debug.propTypes = {
  data: PropTypes.any
}

export default Debug
