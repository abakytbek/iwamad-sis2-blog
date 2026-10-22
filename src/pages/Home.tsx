import { Link } from 'react-router'

function Home() {
  return (
    <section className="section">
      <div className="container blog-home">
        <p className="blog-home-label">PERSONAL BLOG</p>

        <h1>Side Notes</h1>

        <p className="blog-home-subtitle">
          Welcome to my personal blog! 
          A collection of little moments, personal experiences, and thoughts along the way.
          Just a space to share what I learn, enjoy and discover.
        </p>

        <Link to="/posts" className="blog-home-link">
          Explore my Posts →
        </Link>
      </div>
    </section>
  )
}

export default Home