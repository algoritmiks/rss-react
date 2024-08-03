import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../../../pages/_app'
import ErrorBoundary from '../../../components/errorBoundary/errorBoundary'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'
import { ThemeProvider } from '../../../providers/themeProvider'
import { NextComponentType, NextPageContext } from 'next'
import '@testing-library/jest-dom'

const MockComponent = () => <div>Test Component</div>
interface CustomAppProps {
  Component: NextComponentType<NextPageContext>
  /* eslint-disable @typescript-eslint/no-explicit-any */
  pageProps: any
}

const MockApp = ({ Component, pageProps }: CustomAppProps) => (
  <Provider store={store}>
    <ErrorBoundary>
      <ThemeProvider>
        <App
          Component={Component}
          pageProps={pageProps}
          router={pageProps.router}
        />
      </ThemeProvider>
    </ErrorBoundary>
  </Provider>
)

describe('App Component', () => {
  it('renders the App component correctly', () => {
    render(<MockApp Component={MockComponent} pageProps={{}} />)

    const comp = screen.getByText('Test Component')
    expect(comp).toBeInTheDocument()
  })
})
