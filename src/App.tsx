import { useI18n } from './I18nProvider'

const GITHUB = 'https://github.com/spjrwang'
const EMAIL = 'mailto:jingranwang@ucsd.edu'

export default function App() {
  const { t, lang, toggle } = useI18n()

  return (
    <div className="site" data-lang={lang}>
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere__wash" />
        <div className="atmosphere__grid" />
        <div className="atmosphere__orb atmosphere__orb--a" />
        <div className="atmosphere__orb atmosphere__orb--b" />
      </div>

      <header className="nav">
        <a className="nav__brand" href="#top">
          {t.brand}
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#about">{t.navAbout}</a>
          <a href="#research">{t.navResearch}</a>
          <a href="#contact">{t.navContact}</a>
          <button type="button" className="lang-toggle" onClick={toggle}>
            {t.langSwitch}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__copy">
            <p className="hero__name reveal reveal--1">{t.brand}</p>
            <h1 className="hero__headline reveal reveal--2">{t.headline}</h1>
            <p className="hero__tagline reveal reveal--3">{t.tagline}</p>
            <div className="hero__actions reveal reveal--4">
              <a className="btn btn--primary" href="#research">
                {t.ctaResearch}
              </a>
              <a className="btn btn--ghost" href="#contact">
                {t.ctaContact}
              </a>
            </div>
          </div>
          <div className="hero__visual reveal reveal--3" aria-hidden="true">
            <svg
              className="signal"
              viewBox="0 0 480 520"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="signalStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2f7a74" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#1a3a44" stopOpacity="0.35" />
                </linearGradient>
                <linearGradient id="nodeFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7eb8b0" />
                  <stop offset="100%" stopColor="#2f7a74" />
                </linearGradient>
              </defs>
              <g className="signal__network" fill="none" stroke="url(#signalStroke)">
                <path d="M40 420 C120 320, 160 280, 240 260 S360 220, 440 80" strokeWidth="1.5" />
                <path d="M60 460 C140 380, 200 300, 280 290 S380 250, 430 160" strokeWidth="1.2" opacity="0.7" />
                <path d="M20 300 C100 280, 180 340, 260 200 S340 120, 420 40" strokeWidth="1" opacity="0.5" />
              </g>
              <g className="signal__nodes" fill="url(#nodeFill)">
                <circle className="signal__pulse" cx="240" cy="260" r="7" />
                <circle cx="120" cy="340" r="4.5" opacity="0.85" />
                <circle cx="360" cy="180" r="5" opacity="0.9" />
                <circle cx="80" cy="280" r="3.5" opacity="0.7" />
                <circle cx="400" cy="100" r="4" opacity="0.75" />
                <circle cx="280" cy="290" r="3.5" opacity="0.65" />
                <circle cx="160" cy="200" r="3" opacity="0.55" />
              </g>
              <g fill="none" stroke="#1a3a44" strokeOpacity="0.18" strokeWidth="1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={i}
                    x1="40"
                    y1={60 + i * 52}
                    x2="440"
                    y2={60 + i * 52}
                  />
                ))}
              </g>
            </svg>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section__inner">
            <h2 className="section__title">{t.aboutTitle}</h2>
            <div className="prose">
              <p>{t.aboutBody}</p>
              <p>{t.aboutBody2}</p>
            </div>
          </div>
        </section>

        <section id="research" className="section section--research">
          <div className="section__inner">
            <h2 className="section__title">{t.researchTitle}</h2>
            <p className="section__lead">{t.researchIntro}</p>
            <ul className="interest-list">
              {t.interests.map((item) => (
                <li key={item.title} className="interest">
                  <h3 className="interest__title">{item.title}</h3>
                  <p className="interest__body">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section__inner section__inner--narrow">
            <h2 className="section__title">{t.contactTitle}</h2>
            <p className="section__lead">{t.contactBody}</p>
            <div className="contact-links">
              <a href={GITHUB} target="_blank" rel="noreferrer">
                {t.contactGithub}
              </a>
              <a href={EMAIL}>{t.contactEmail}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {t.brand}
        </p>
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}
