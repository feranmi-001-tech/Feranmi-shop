import { Link } from 'react-router-dom'
import './About.css'

const pillars = [
  {
    label: 'Our mission',
    copy: 'Make fewer, better clothes that people keep wearing for years.',
  },
  {
    label: 'Our vision',
    copy: 'A wardrobe built on quality instead of passing trends.',
  },
  {
    label: 'Our values',
    copy: 'Fair wages, traceable fabric and honest prices.',
  },
]

export default function About() {
  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <span className="eyebrow">About us</span>
          <h1>A small clothing studio in Lagos</h1>
          <p>
            We design and sew everyday clothing in small batches — dresses,
            shirting, bags and footwear.
          </p>
        </div>
      </section>

      <figure className="about-hero">
        <img
          src="/images/studio-rail.jpg"
          alt="Clothing hanging on a rail in our studio"
        />
      </figure>

      <section className="section about-story">
        <div className="container about-story__inner">
          <div>
            <span className="eyebrow">Our story</span>
            <h2>It started with one pattern</h2>
            <p>
              Feranmi Store began in 2016 with a single shirt pattern sold at a
              weekend market. Customers kept coming back, so we kept improving
              the same core pieces instead of chasing new trends.
            </p>
            <p>
              Today we cut and sew in small runs in Lekki, Lagos, using natural
              fabrics and repairing anything we make for free.
            </p>
            <Link to="/shop" className="text-link">
              See what we make <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="about-story__media">
            <img
              src="/images/studio-rail-2.jpg"
              alt="Rail of T-shirts inside the workroom"
            />
          </div>
        </div>
      </section>

      <section className="section about-pillars">
        <div className="container">
          <div className="about-pillars__grid">
            {pillars.map((pillar) => (
              <article key={pillar.label} className="pillar">
                <span className="pillar__label">{pillar.label}</span>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
