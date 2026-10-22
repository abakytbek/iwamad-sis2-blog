type MySpaceProps = {
  onLogout: () => void
}

function MySpace({ onLogout }: MySpaceProps) {
  return (
    <section className="section">
      <div className="container auth-page">
        <h1>My Space</h1>
        <p>This is a protected page in my Side Notes blog.</p>

        <button
          type="button"
          className="auth-button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </section>
  )
}

export default MySpace