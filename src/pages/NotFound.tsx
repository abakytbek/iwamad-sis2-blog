import { Link } from 'react-router'

function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <h1>404 — Page Not Found</h1>
        <p>Oops! This page doesn't exist.</p>
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound