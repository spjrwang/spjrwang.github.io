import { publications } from './i18n'
import { useI18n } from './I18nProvider'

const GITHUB = 'https://github.com/spjrwang'
const EMAIL = 'mailto:jingranwang@ucsd.edu'
const SCHOLAR =
  'https://scholar.google.com/citations?user=z3r8sG0AAAAJ&hl=zh-CN'
const LINKEDIN = 'https://www.linkedin.com/in/spencer-jrwang'

function AuthorsLine({
  authors,
}: {
  authors: { name: string; self?: boolean }[]
}) {
  return (
    <span className="pub__authors">
      {authors.map((author, i) => (
        <span key={`${author.name}-${i}`}>
          {i > 0 && ', '}
          {author.self ? <strong>{author.name}</strong> : author.name}
        </span>
      ))}
    </span>
  )
}

export default function App() {
  const { t, lang, toggle } = useI18n()

  return (
    <div className="site" data-lang={lang}>
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere__glow atmosphere__glow--a" />
        <div className="atmosphere__glow atmosphere__glow--b" />
      </div>

      <header className="nav">
        <a className="nav__brand" href="#top">
          <span className="nav__mark" aria-hidden="true">
            🧬
          </span>
          {t.brand}
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#about">{t.navAbout}</a>
          <a href="#education">{t.navEducation}</a>
          <a href="#research">{t.navResearch}</a>
          <a href="#publications">{t.navPublications}</a>
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

          <div className="hero__visual reveal reveal--2">
            <div className="portrait-stage">
              <img
                className="portrait"
                src="/portrait.png"
                alt={t.brand}
                width={640}
                height={640}
              />
            </div>
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

        <section id="education" className="section section--alt">
          <div className="section__inner">
            <h2 className="section__title">{t.educationTitle}</h2>
            <ul className="edu-list">
              {t.education.map((item) => (
                <li key={item.degree} className="edu">
                  <div className="edu__main">
                    <h3 className="edu__degree">{item.degree}</h3>
                    <p className="edu__school">{item.school}</p>
                  </div>
                  <p className="edu__period">{item.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="research" className="section">
          <div className="section__inner">
            <h2 className="section__title">{t.researchTitle}</h2>
            <p className="section__lead">{t.researchIntro}</p>
            <div className="research-layout">
              <ul className="interest-list">
                {t.interests.map((item) => (
                  <li key={item.title} className="interest">
                    <h3 className="interest__title">{item.title}</h3>
                    <p className="interest__body">{item.body}</p>
                  </li>
                ))}
              </ul>
              <figure className="research-figure">
                <img
                  src="/figures/research-schematic.jpg"
                  alt="Research interests schematic: multimodal EHR and genomics integration, foundation model alignment, and model-device integration"
                  width={720}
                  height={960}
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="publications" className="section section--alt">
          <div className="section__inner">
            <h2 className="section__title">{t.publicationsTitle}</h2>
            <p className="section__lead">{t.publicationsIntro}</p>
            <ol className="pub-list">
              {publications.map((pub) => (
                <li key={pub.doi} className="pub">
                  <div className="pub__body">
                    <a
                      className="pub__title"
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {pub.title}
                    </a>
                    <p className="pub__meta">
                      <AuthorsLine authors={pub.authors} />
                    </p>
                    <p className="pub__venue">
                      <span className="pub__journal">{pub.venue}</span>
                      <span className="pub__year"> · {pub.year}</span>
                    </p>
                  </div>
                  <figure className="pub__figure">
                    <img
                      src={pub.figure}
                      alt=""
                      width={640}
                      height={360}
                      loading="lazy"
                    />
                  </figure>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section__inner section__inner--narrow">
            <h2 className="section__title">{t.contactTitle}</h2>
            <p className="section__lead">{t.contactBody}</p>
            <div className="contact-links">
              <a href={EMAIL}>{t.contactEmail}</a>
              <a href={SCHOLAR} target="_blank" rel="noreferrer">
                {t.contactScholar}
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">
                {t.contactLinkedIn}
              </a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                {t.contactGithub}
              </a>
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
