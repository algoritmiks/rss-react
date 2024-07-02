import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    console.log(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error: Error) {
    if (error) {
      console.log('error >', error.message)
      return { hasError: true }
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
