import { render } from '@testing-library/react'

import FilterByType from './filter-by-type'

describe('FilterByType', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilterByType />)
    expect(baseElement).toBeTruthy()
  })
})
