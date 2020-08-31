import React from 'react'
import PropTypes from 'prop-types'

import Icon from './Icon'

const IconYouTube = ({ colorMode, theme }) => (
  <Icon social accent='#CD201F'>
    <g clipPath='url(#prefix__clip0)'>
      <path
        d='M33.306 17.988c-4.584-2.45-8.974-4.702-13.461-7.053v14.067c4.722-2.566 9.699-4.917 13.48-7.014h-.019z'
        fill={
          colorMode === 'dark'
            ? theme.colors.modes.dark.backgroundAlt
            : theme.colors.backgroundAlt
        }
      />
      <path d='M33.306 17.988c-4.584-2.45-13.461-7.053-13.461-7.053l11.835 7.954s-2.156 1.196 1.626-.9z' />
      <path d='M20.708 36.014c-9.523-.175-12.775-.333-14.774-.745-1.352-.273-2.528-.88-3.39-1.762-.666-.667-1.195-1.685-1.606-3.096-.353-1.177-.49-2.155-.686-4.546-.3-5.395-.37-9.806 0-14.735C.558 8.41.707 5.178 2.74 3.293a6.67 6.67 0 013.331-1.685C8.031 1.236 16.378.942 25.02.942c8.621 0 16.986.294 18.948.666 1.566.294 3.036 1.175 3.898 2.312 1.856 2.918 1.888 6.547 2.077 9.386.078 1.352.078 9.032 0 10.385-.294 4.486-.53 6.073-1.195 7.719-.412 1.039-.764 1.587-1.372 2.194a6.573 6.573 0 01-3.488 1.783c-8.24.62-15.238.755-23.18.627zm12.619-18.026c-4.585-2.45-8.974-4.721-13.462-7.073v14.069c4.722-2.567 9.7-4.919 13.481-7.015l-.02.02z' />
    </g>
  </Icon>
)

IconYouTube.propTypes = {
  colorMode: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
}

export default IconYouTube
