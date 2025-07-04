import React, { useState } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './about.module.css';
import { FaGithub, FaGlobe, FaChevronDown } from 'react-icons/fa';
// import DocusaurusLogo from '@site/static/img/docusaurus.svg';
// import ReactLogo from '@site/static/img/react.svg';
// import InfimaLogo from '@site/static/img/infima.svg';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  // Adjustable transition duration in ms
  const transitionDuration = 400;

  return (
    <Layout title="About" description="Learn more about this personal website and the open source tools used.">
      <main className={clsx('container', styles.aboutMain)}>
        <div className={styles.aboutHeader}>
          <h1>About This Website</h1>
          <div className={styles.aboutHeaderText}>
            This website (<a href="https://004ajay.github.io" target="_blank" rel="noopener noreferrer">https://004ajay.github.io</a>) is where I test my web design and development skills as a programmer. I'm incredibly grateful to all the people who create free and open-source frameworks. Since I frequently test new things here, you can expect newer things most of the time.
          </div>
          <button
            className={styles.dropdownButton}
            aria-expanded={isOpen}
            aria-controls="story-content"
            onClick={() => setIsOpen((v) => !v)}
            title="Read More"
          >
            <FaChevronDown
              className={clsx(styles.chevronIcon, isOpen && styles.chevronOpen)}
              aria-hidden="true"
            />
          </button>
        </div>
        <div className={styles.dropdownSection}>
          <div
            id="story-content"
            className={styles.storyContent}
            style={{
              maxHeight: isOpen ? 500 : 0,
              opacity: isOpen ? 1 : 0,
              transition: `max-height ${transitionDuration}ms cubic-bezier(0.4,0,0.2,1), opacity ${transitionDuration}ms`,
              overflow: 'hidden',
              marginTop: isOpen ? '1rem' : 0,
            }}
            aria-hidden={!isOpen}
          >
            {/* Write your story here! */}
            I've also set up a separate webpage on Google Sites (<a href="https://sites.google.com/view/004ajay" target="_blank" rel="noopener noreferrer">https://sites.google.com/view/004ajay</a>) for my academic and work-related content. Initially, I considered "vibe-coding" a complete website from scratch, but my requirements quickly grew too complex for that approach—it felt like I was trying to build a new framework myself!
            <br />
            While Browse GitHub repositories, I discovered Docusaurus. I was very impressed by its capabilities and the examples of other sites built using it, which convinced me it was the perfect framework for my personal website. I plan to add many more features to this site in the future, so keep watching for updates!
          </div>
        </div>
        <h2 className={styles.thanksHeading}>Thanks</h2>
        <div className={styles.tilesRow}>
          <div className={styles.tile}>
            <img src={require('@site/static/img/docusaurus.png').default} alt="Docusaurus Logo" className={styles.tileLogo} />
            <div className={styles.tileTitle}>Docusaurus</div>
            <div className={styles.tileDesc}>A static site generator powering this website.</div>
            <div className={styles.tileIcons}>
              <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer"><FaGlobe size={24} /></a>
              <a href="https://github.com/facebook/docusaurus" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            </div>
          </div>
          <div className={styles.tile}>
            <img src={require('@site/static/img/lucide.png').default} alt="Lucide Logo" className={styles.tileLogo} />
            <div className={styles.tileTitle}>Lucide</div>
            <div className={styles.tileDesc}>A website that provide free icons in different formats.</div>
            <div className={styles.tileIcons}>
              <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer"><FaGlobe size={24} /></a>
              <a href="https://github.com/lucide-icons/lucide" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            </div>
          </div>
          {/* <div className={styles.tile}>
            <img src={require('@site/static/img/lucide.png').default} alt="Infima Logo" className={styles.tileLogo} />
            <div className={styles.tileTitle}>Infima</div>
            <div className={styles.tileDesc}>The CSS framework used for Docusaurus styling.</div>
            <div className={styles.tileIcons}>
              <a href="https://infima.dev/" target="_blank" rel="noopener noreferrer"><FaGlobe size={24} /></a>
              <a href="https://github.com/facebookincubator/infima" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
            </div>
          </div> */}
        </div>
        <br />
        <h2 className={styles.usefulLinksHeading}>Useful Links</h2>
        <ul className={styles.usefulLinksList}>
          <li>
            <a href="https://jupyterbook.org/en/stable/content/math.html" target="_blank" rel="noopener noreferrer">
              Math & Equations - Jupyter Book
            </a> 
            {/* - Math Equation Helper for Jupyter Notebook. */}
          </li>
          <li>
            <a href="https://github.com/easyops-cn/docusaurus-search-local" target="_blank" rel="noopener noreferrer">
              Docusaurus Local Search Tool
            </a>
          </li>
          <li>
            <a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer">
              Bootstrap Icons
            </a>
          </li>
          {/* Add more useful links as needed */}
        </ul>
      </main>
    </Layout>
  );
}