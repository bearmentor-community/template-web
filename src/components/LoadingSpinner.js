import React from 'react'
import PropTypes from 'prop-types'
import styled, { useColorMode } from '@xstyled/emotion'

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  &:after {
    content: ' ';
    display: block;
    width: ${(props) => props.innerSize};
    height: ${(props) => props.innerSize};
    border: ${(props) => props.border};
    border-radius: 50%;
    margin: 10;
    border-color: ${(props) => props.color};
    border-color: ${(props) => props.color} transparent;
    animation: loading 1.2s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingSpinner = ({
  width = 100,
  height = 100,
  innerSize = 50,
  border = 10
}) => {
  const [colorMode] = useColorMode()
  const color = colorMode === 'dark' ? '#fff' : '#000'

  return (
    <Spinner
      color={color}
      width={width}
      height={height}
      innerSize={innerSize}
      border={border}
    />
  )
}

LoadingSpinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  innerSize: PropTypes.number,
  border: PropTypes.number
}

export default LoadingSpinner
