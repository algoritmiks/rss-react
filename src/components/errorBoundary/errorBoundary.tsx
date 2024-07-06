import React from 'react'
import css from './errorBoundary.module.css'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    if (error) {
      console.log(error.message)
      return { hasError: true }
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong</h1>
          <button className={css.btn} onClick={() => window.location.reload()}>
            Reload
          </button>
        </>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
