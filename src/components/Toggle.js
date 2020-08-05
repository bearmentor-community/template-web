import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const ToggleButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10;
  padding: 0;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`

const Image = styled.img`
  height: 20;
`

const icon = {
  light: '/assets/icons/light.svg',
  dark: '/assets/icons/dark.svg'
}

const Toggle = ({ colorMode, onClick }) => {
  return (
    <ToggleButton onClick={onClick}>
      <Image
        alt='Color Mode'
        src={colorMode === 'dark' ? icon.light : icon.dark}
      />
    </ToggleButton>
  )
}

Toggle.propTypes = {
  colorMode: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Toggle
