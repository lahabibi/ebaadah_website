import "./App.css";

const features = [
  {
    title: "Accurate prayer times",
    text: "Location-aware Fajr, Dhuhr, Asr, Maghrib, and Isha times with calculation settings built for daily reliability.",
    icon: "/assets/ic_prayer.png",
  },
  {
    title: "Qibla direction",
    text: "A clear Qibla compass experience that helps Muslims find the direction of prayer wherever they are.",
    icon: "/assets/ic_qibla.png",
  },
  {
    title: "Quran reading and study",
    text: "Read, resume, bookmark, take notes, explore reciters, and keep Quran progress close across your worship routine.",
    icon: "/assets/ic_quran.png",
  },
  {
    title: "Daily duas",
    text: "Morning, evening, sleep, travel, gratitude, forgiveness, hardship, and Quran duas in one calm library.",
    icon: "/assets/ic_dua.png",
  },
];

const seoHubs = [
  "Prayer times by city",
  "Qibla direction by location",
  "Daily dua library",
  "Quran study guides",
  "Ramadan and fasting hub",
  "New Muslim worship guides",
];

const premiumItems = [
  "Offline Quran recitation downloads.",
  "Advanced Quran study tools",
  "Personal notes, bookmarks, and progress sync",
  "A focused worship companion without noisy distractions",
];

const faqItems = [
  {
    question: "What is Ebaadah?",
    answer:
      "Ebaadah is a Muslim worship companion for prayer times, Qibla direction, Quran reading, Quran study, daily duas, reminders, and worship tracking.",
  },
  {
    question: "Is Ebaadah available on iPhone and Android?",
    answer:
      "Ebaadah is being prepared for the App Store and Google Play. The website will point visitors to the store pages as soon as the app is live.",
  },
  {
    question: "Does Ebaadah use my location?",
    answer:
      "Location is used for worship features like prayer time calculation and Qibla direction. Ebaadah is designed around privacy and does not sell personal data.",
  },
];

const siteMode = (process.env.REACT_APP_SITE_MODE || "coming-soon")
  .trim()
  .toLowerCase();

const comingSoonAssets = "/assets/coming-soon";

const comingSoonFeatures = [
  {
    title: "Salah",
    text: "Prayer times, notifications and beautiful reminders.",
    icon: `${comingSoonAssets}/icon-salah.png`,
  },
  {
    title: "Quran",
    text: "Read, listen and track your Quran journey.",
    icon: `${comingSoonAssets}/icon-quran.png`,
  },
  {
    title: "Du'a",
    text: "Authentic supplications for every moment.",
    icon: `${comingSoonAssets}/icon-dua.png`,
  },
  {
    title: "Qibla",
    text: "Find Qibla direction accurately, anywhere.",
    icon: `${comingSoonAssets}/icon-qibla.png`,
  },
  {
    title: "Daily Habits",
    text: "Build better habits and stay consistent in worship.",
    icon: `${comingSoonAssets}/icon-habit.png`,
  },
];

function ComingSoon() {
  return (
    <div
      className="soon-page"
      style={{
        "--soon-bg": `url(${comingSoonAssets}/background-mosque.png)`,
      }}
    >
      <header className="soon-header" aria-label="Ebaadah coming soon header">
        <a className="soon-brand" href="#top" aria-label="Ebaadah home">
          <img src={`${comingSoonAssets}/logo.png`} alt="" />
          <span>
            <strong>Ebaadah</strong>
            <small>Your companion in worship</small>
          </span>
        </a>
        <a className="soon-get-app" href="#stores">
          <span aria-hidden="true" className="soon-phone-icon" />
          Get the App Soon
        </a>
      </header>

      <main id="top" className="soon-main">
        <section className="soon-hero" aria-labelledby="soon-title">
          <div className="soon-copy">
            <div className="soon-badge">
              <span aria-hidden="true" className="soon-crescent" />
              Coming Soon
            </div>
            <h1 id="soon-title">
              <span>A beautiful new</span>
              <em>Ebaadah app</em>
              <span>is coming soon</span>
            </h1>
            <p className="soon-lede">
              We're preparing a better experience to help you worship, learn,
              and grow closer to Allah every day.
            </p>

            <form className="soon-email" aria-label="Email notification form">
              <label htmlFor="coming-soon-email">Email address</label>
              <span aria-hidden="true" className="soon-email-icon" />
              <input
                id="coming-soon-email"
                type="email"
                placeholder="Enter your email address"
              />
              <button type="button" aria-label="Get notified">
                <span aria-hidden="true" className="soon-mail-icon" />
                Get Notified
              </button>
            </form>

            <p className="soon-note">
              <span aria-hidden="true">◇</span>
              We'll notify you as soon as the app is available for download. No
              spam, ever.
            </p>
          </div>

          <div className="soon-devices" aria-label="Ebaadah app preview">
            <img
              src={`${comingSoonAssets}/hero-devices.png`}
              alt="Ebaadah app preview on laptop and phone"
            />
          </div>
        </section>

        <section className="soon-features" aria-label="Ebaadah features">
          {comingSoonFeatures.map((feature) => (
            <article className="soon-feature" key={feature.title}>
              <div className="soon-feature-icon">
                <img src={feature.icon} alt="" />
              </div>
              <div>
                <h2>{feature.title}</h2>
                <p>{feature.text}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="soon-footer">
        <div className="soon-footer-brand">
          <img src={`${comingSoonAssets}/logo.png`} alt="" />
          <strong>Ebaadah</strong>
        </div>

        <div className="soon-footer-status">
          <p>Launching soon. Stay connected.</p>
          <span>© 2026 Ebaadah. All rights reserved.</span>
        </div>

        <blockquote className="soon-quote">
          <p dir="rtl">
            وَٱللَّهُ يَدْعُوٓا۟ إِلَىٰ دَارِ ٱلسَّلَـٰمِ وَيَهْدِى مَن يَشَآءُ
            إِلَىٰ صِرَٰطٍۢ مُّسْتَقِيمٍۢ
          </p>
          <cite>
            And Allah invites ˹all˺ to the Home of Peace and guides whoever He
            wills to the Straight Path.
          </cite>
        </blockquote>

        <div className="soon-store-panel" id="stores">
          <div className="soon-store-links">
            <a href="#top" aria-label="Download on the App Store">
              <img src={`${comingSoonAssets}/app-store-badge.png`} alt="" />
            </a>
            <a href="#top" aria-label="Get it on Google Play">
              <img src={`${comingSoonAssets}/google-play-badge.png`} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FullWebsite() {
  return (
    <div className="site-shell">
      <header className="nav">
        <a className="brand" href="#top" aria-label="Ebaadah home">
          <img src="/assets/app_logo.png" alt="" />
          <span>Ebaadah</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#seo">SEO Hubs</a>
          <a href="#premium">Premium</a>
          <a href="#support">Support</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-band">
          <div className="hero-copy">
            <p className="eyebrow">
              Prayer. Quran. Duas. Qibla. One companion.
            </p>
            <h1>Your daily Muslim worship companion.</h1>
            <p className="hero-text">
              Ebaadah helps Muslims build a calmer daily worship rhythm with
              accurate prayer times, Quran progress, Qibla direction, daily
              duas, reminders, and study tools.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a
                className="button button-primary"
                href="mailto:contact@ebaadah.com?subject=Notify%20me%20when%20Ebaadah%20launches"
              >
                Get launch updates
              </a>
              <a className="button button-secondary" href="#features">
                Explore features
              </a>
            </div>
            <div className="trust-row" aria-label="Launch highlights">
              <span>Privacy-first</span>
              <span>10 languages planned</span>
              <span>iOS and Android</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ebaadah app preview">
            <img
              className="mosque-glow"
              src="/assets/i_mosque_glow.webp"
              alt=""
            />
            <div className="phone-frame">
              <div className="phone-top">
                <span>Assalamu Alaikum</span>
                <strong>5:12 AM</strong>
              </div>
              <div className="prayer-card">
                <span>Next prayer</span>
                <strong>Fajr</strong>
                <p>Accurate reminders for your city</p>
              </div>
              <div className="mini-grid">
                <div>
                  <img src="/assets/ic_qibla.png" alt="" />
                  <span>Qibla</span>
                </div>
                <div>
                  <img src="/assets/ic_quran.png" alt="" />
                  <span>Quran</span>
                </div>
                <div>
                  <img src="/assets/ic_dua.png" alt="" />
                  <span>Duas</span>
                </div>
              </div>
              <div className="quran-strip">
                <img src="/assets/i_quran.png" alt="" />
                <div>
                  <span>Resume Quran</span>
                  <strong>Continue your reading journey</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-band compact intro">
          <p>
            The website will become Ebaadah's search engine growth layer:
            helpful pages for prayer times, Qibla direction, Quran learning,
            daily duas, Ramadan, and beginner worship guidance, each designed to
            guide visitors toward the app.
          </p>
        </section>

        <section className="section-band" id="features">
          <div className="section-heading">
            <p className="eyebrow">App features</p>
            <h2>Built around daily worship moments</h2>
            <p>
              The first website version should make every major app feature
              understandable to search visitors and useful to app store
              reviewers.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <img src={feature.icon} alt="" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band seo-section" id="seo">
          <div className="section-heading">
            <p className="eyebrow">SEO growth plan</p>
            <h2>Website features that can bring downloads</h2>
            <p>
              These are the content and utility areas that make sense for
              organic search because people already look for them before they
              know Ebaadah exists.
            </p>
          </div>
          <div className="seo-layout">
            <div className="seo-panel">
              {seoHubs.map((item) => (
                <div className="seo-row" key={item}>
                  <span aria-hidden="true" />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <div className="conversion-panel">
              <h3>Every SEO page needs one clear job</h3>
              <p>
                Help the visitor answer a real worship question, then invite
                them to continue in Ebaadah with reminders, saved progress, and
                a better mobile experience.
              </p>
              <a className="text-link" href="#support">
                Start with launch pages
              </a>
            </div>
          </div>
        </section>

        <section className="section-band premium" id="premium">
          <div className="premium-copy">
            <p className="eyebrow">Monetization</p>
            <h2>Premium should feel like deeper worship support</h2>
            <p>
              Ebaadah Premium can grow from features users naturally value:
              offline recitations, advanced study, personalization, and safe
              syncing across devices.
            </p>
          </div>
          <ul className="premium-list">
            {premiumItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="section-band faq">
          <div className="section-heading">
            <p className="eyebrow">Questions</p>
            <h2>Helpful answers for search and trust</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="section-band support" id="support">
          <div>
            <p className="eyebrow">Launch foundation</p>
            <h2>Ready for privacy, support, and store review pages</h2>
            <p>
              Before the app goes live, this site should include privacy policy,
              terms, support, credits, and download links for App Store and
              Google Play.
            </p>
          </div>
          <a
            className="button button-primary"
            href="mailto:contact@ebaadah.com?subject=Ebaadah%20website"
          >
            Contact Ebaadah
          </a>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand">
          <img src="/assets/app_logo.png" alt="" />
          <span>Ebaadah</span>
        </div>
        <p>Daily worship support for prayer, Quran, Qibla, duas, and study.</p>
        <div className="footer-links">
          <a href="mailto:contact@ebaadah.com">contact@ebaadah.com</a>
          <a href="#features">Features</a>
          <a href="#seo">SEO Hubs</a>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return siteMode === "full" ? <FullWebsite /> : <ComingSoon />;
}

export default App;
