import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { Cards } from '../../../components/cards/cards'

import { mockUsers } from './mockUsers'

describe('Users', () => {
  it('renders the specified number of cards', () => {
    render(<Cards users={mockUsers} />, { wrapper: BrowserRouter })
    const characterList = screen.getAllByText('Age: 28')
    expect(characterList).toHaveLength(1)
  })
})
