type LoginProps = {
  onLogin: () => void
}

function Login({ onLogin }: LoginProps) {
  return (
    <section className="section">
      <div className="container auth-page">
        <h1>Welcome Back</h1>
        <p>Log in to access your personal space.</p>

        <button
          type="button"
          className="auth-button"
          onClick={onLogin}
        >
          Login
        </button>
      </div>
    </section>
  )
}

export default Login