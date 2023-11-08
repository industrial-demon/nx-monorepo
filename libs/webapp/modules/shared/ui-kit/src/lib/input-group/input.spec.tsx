import { render } from '@testing-library/react'

import Input from './input-group'

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input />)
    expect(baseElement).toBeTruthy()
  })
})
