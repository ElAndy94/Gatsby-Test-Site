import React from "react"
// import { Link } from "gatsby"
// import Image from "../components/image"
// import SEO from "../components/seo"

import Layout from "../components/layout"
import tmIcon from '../images/tmg/tm-logo.png'
import oceanIcon from '../images/tmg/ocean-panel.png'
import credIcon from '../images/tmg/cred-logo.png'
import fwgIcon from '../images/tmg/greg-icon.png'
import tmIconSecond from '../images/tmg/tm-logo-second.png'
import oceanIconSecond from '../images/tmg/ocean-logo-second.png'
import credIconSecond from '../images/tmg/cred-icon.png'
import fwgIconSecond from '../images/tmg/greg-icon-second.png'
import '../styles/pages/tmg.scss'


const IndexPage = () => (
  <Layout>
    <section className="hero">
      <div className="hero-container">
        <h1>An innovative provider of financial services and advice</h1>
      </div>
    </section>

    <section className="section-overlay">
      <div className="tmg-wrapper section-centre overlay--container">
        <a href="/thinkmoney/">
          <div className="overlay--icons tmg-brand-yellow">
            <img src={tmIconSecond} />
          </div>
        </a>
        <a href="/ocean-finance/">
          <div className="overlay--icons tmg-brand-blue">
            <img src={oceanIconSecond} />
          </div>
        </a>
        <a href="/credability/">
          <div className="overlay--icons tmg-brand-purple">
            <img src={credIcon} />
          </div>
        </a>
        <a href="/fwg/">
          <div className="overlay--icons tmg-brand-light--blue">
            <img src={fwgIconSecond} />
          </div>
        </a>

      </div>
    </section>

    <section className="tmg-section-grey ipad-section-pad">
      <div className="tmg-wrapper">
        <article className="section-content--middle about-tmg">
          <h2 className="tmg-center--mobile">About</h2>
          <p>TMG is home to four innovative, market-leading financial technology and service businesses, all
                united by the goal of helping customers better manage their money.</p>
          <p>Our group consists of thinkmoney banking, lending specialists Ocean Finance, financial fitness app
              CredAbility and our debt solutions services - Gregory Pennington, Freeman Jones and Wilson Andrews.
            </p>
          <p>Driven by offering best in class products alongside exceptional customer service, our customers are
                always at the heart of everything we do.</p>
          <p>We are ambitious and dedicated to continually exceeding customer expectations. But, to achieve our
              goals, we need more like-minded, passionate individuals to rise to the challenge. Could you be the
                next member of our team?</p>
        </article>
      </div>
    </section>

    <section className="tmg-section-white">
      <div className="tmg-wrapper">
        <article className="tmg-fullwidth">
          <h2 className='tmg-center--mobile tmg-header--marg'>The Brands</h2>
          <div className="tmg-brands tmg-brand-yellow">
            <a href="/thinkmoney/"><img src={tmIcon} className="tmg-brands--image" /></a>
            <div className="tmg-brands--content">
              <h3>thinkmoney</h3>
              <p>Taking the stress out of budgeting and helping customers stay in control of their finances.</p>
            </div>
          </div>
          <div className="tmg-brands tmg-brand-blue">
            <a href="/ocean-finance/"><img src={oceanIcon} className="tmg-brands--image" /></a>
            <div className="tmg-brands--content">
              <h3>Ocean Finance</h3>
              <p>Dedicated to making finance more accessible, simple and easy to understand.</p>
            </div>
          </div>
          <div className="tmg-brands tmg-brand-purple">
            <a href="/credability/"><img src={credIconSecond} className="tmg-brands--image" /></a>
            <div className="tmg-brands--content">
              <h3>CredAbility</h3>
              <p>A financial wellbeing service offering a full credit report every month, and more.</p>
            </div>
          </div>
          <div className="tmg-brands tmg-brand-light--blue">
            <a href="/fwg/"><img src={fwgIcon} className="tmg-brands--image" /></a>
            <div className="tmg-brands--content">
              <h3>Gregory Pennington, Freeman Jones and Wilson Andrews</h3>
              <p>Our mission is to improve the wellbeing of people with serious debt problems.</p>
            </div>
          </div>
        </article>
      </div>
    </section>
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <div style={{ maxWidth: `400px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/blog/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
