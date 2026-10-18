import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <NavLink to="/" className="logo">
          Side Notes
        </NavLink>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/posts">
            Posts
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header