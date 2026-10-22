import { NavLink } from 'react-router'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <NavLink to="/" className="logo">
          <img 
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt=""
          className="site-logo"
          />
          <span>Side Notes</span>
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