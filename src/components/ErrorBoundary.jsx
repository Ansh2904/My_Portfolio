import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#07090e] text-white p-8 font-mono flex flex-col items-center justify-center">
          <div className="max-w-xl w-full bg-slate-900 border border-rose-500/50 p-6 rounded-2xl shadow-2xl">
            <h1 className="text-xl font-bold text-rose-400 mb-2">Rendering Error Detected</h1>
            <p className="text-slate-300 text-xs mb-4">An unexpected error occurred while rendering the portfolio:</p>
            <pre className="bg-black/80 p-4 rounded-xl text-rose-300 text-xs overflow-auto max-h-60 mb-4 whitespace-pre-wrap">
              {this.state.error?.toString()}
              {'\n'}
              {this.state.error?.stack}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
