function Contact() {
  return (
    <section className="section">
      <div className="container blog-contact">
        <h1>Let's Connect</h1>

        <p className="blog-contact-description">
          Have a question or just want to say hello?
          Feel free to reach out!
        </p>

        <div className="blog-contact-links">
          <div className="blog-contact-item">
            <span>Email</span>
            <a href="mailto:aiz_bakytbek@kbtu.kz">
              aiz_bakytbek@kbtu.kz
            </a>
          </div>

          <div className="blog-contact-item">
            <span>GitHub</span>
            <a
              href="https://github.com/abakytbek"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/abakytbek
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact