import { render, screen } from '@testing-library/react'
import React from 'react'
import { describe, it, expect } from 'vitest'
import { Cart } from '../../../components/cart/cart'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

describe('Cart', () => {
  it('checkbox', () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>,
    )
    // expect(screen.getByText('Unselect all')).toBeInTheDocument()
    // const searchButton = screen.getByRole('button')
    const div = screen.getByText(/div/i)
    expect(div).toBeInTheDocument()
  })
})
