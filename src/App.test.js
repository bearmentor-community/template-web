import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

test('renders paragraph', () => {
  const { getByText } = render(<App />)
  const paragraphElement = getByText(/Intergalactic/i)
  expect(paragraphElement).toBeInTheDocument()
})
