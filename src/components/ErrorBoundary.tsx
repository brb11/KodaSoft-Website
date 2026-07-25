import { Component, type ReactNode, type ErrorInfo } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean; error: Error | null };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-navy-950 px-6 text-center">
          <p className="font-mono text-sm tracking-widest text-cyan-400">// error</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-ice sm:text-4xl">
            Something went wrong.
          </h1>
          <p className="mt-4 max-w-md text-ice/60">
            An unexpected error occurred. Please refresh the page or try again later.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-shadow hover:shadow-[0_14px_50px_-8px_rgba(43,184,240,0.9)]"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
