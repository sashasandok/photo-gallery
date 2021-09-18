import React from 'react'
import PropTypes from 'prop-types'
import styles from './ErrorBoundaryInfo.module.scss'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo })
  }

  render() {
    if (this?.state?.hasError) {
      const { error, errorInfo } = this.state
      return (
        <div className={styles.errorBoundaryInfo}>
          <h1 className={styles.message}>{error?.message}</h1>
          <hr color="red" size={1}/>
          <p className={styles.stack}>{errorInfo?.componentStack}</p>
        </div>
      )
    }
    return this?.props?.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary