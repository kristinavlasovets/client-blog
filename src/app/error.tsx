'use client';

import React, { Component, ErrorInfo } from 'react';

import { ErrorBoundaryProps, ErrorBoundaryState } from '@/types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  public render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          <p>Something went wrong.</p>
          <p>
            {error && error.toString()}
            <br />
            {errorInfo && errorInfo.componentStack}
          </p>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
