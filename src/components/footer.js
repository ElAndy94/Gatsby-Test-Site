import React from 'react';

import '../styles/footer.scss'
import LinkedInImage from '../images/shared/footer/linkedin-icon.svg';
import TMGImage from '../images/shared/footer/tmg-footer.svg';

const Footer = () => (
    <footer>
        <div className="tmg-wrapper tmg-split footer-container">
            <div className="footer-first-container">
                <article className="footer-content">
                    <p className="tmg-small">
                        TMG Limited
                            <br />
                        Registered in England and Wales (Company number: 5987151)
                        </p>
                    <p className="tmg-small">
                        Registered office:
                            <br />
                        Think Park, Mosley Road, Trafford Park,
                        Manchester, M17 1FQ
                        </p>
                </article>
                <article className="footer-content-right">
                    <p className="footer-text">Follow us on LinkedIn</p>
                    <a href="https://www.linkedin.com/company/tmg-limited/about/">
                        <img src={LinkedInImage} alt="LinkedIn Icon" id="icon-pad" />
                    </a>
                </article>
            </div>
        </div>

        <div className="footer-second-container">
            <div className="tmg-wrapper">
                <article>
                    <img src={TMGImage} alt="TMG Icon" />
                </article>
                <article>
                    <ul className="legalLinks">
                        <li>
                            <a href="/privacy-policy/">Privacy policy</a>
                        </li>
                        <li>
                            <a href="/gender-pay-gap/">Gender pay gap report</a>
                        </li>
                        <li>
                            <a href="/modern-slavery-statement/">Modern slavery statement</a>
                        </li>
                        <li>
                            <a href="/sitemap/">Sitemap</a>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    </footer>
)

export default Footer