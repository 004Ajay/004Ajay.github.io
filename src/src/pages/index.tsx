import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useHistory } from '@docusaurus/router';

import styles from '../css/custom.module.css';

function Home(): JSX.Element {
  const [showSplash, setShowSplash] = useState(true);
  const [searchValue, setSearchValue] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (query: string) => {
    if (query) {
      // Assuming Docusaurus local search is at /search and takes a 'q' parameter
      history.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch(searchValue);
    }
  };

  const handleSuggestionClick = (suggestionUrl: string) => {
    history.push(suggestionUrl);
  };

  return (
    <Layout
      title="Home"
      description="Personal Website of Ajay"
      noFooter={true}
    >
      {showSplash && (
        <div className={clsx(styles.splashScreen, { [styles.splashScreenHidden]: !showSplash })}>
          <div className={styles.splashAnimation}></div>
        </div>
      )}

      <main className={styles.mainContainer}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>AJAY</h1>
          {/* <p className={styles.subtitle}>Personal Website</p> */}
        </header>

        <input
          type="text"
          className={styles.searchBar}
          placeholder="search..."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />

        <div className={styles.suggestionsArea}>
   {/* <button
     className={styles.infoButton}
     onClick={() => handleSuggestionClick('/about')}>
       🛈
    </button> */}
    
    <div className={styles.infoIcons}>
      <a href="/about" title="About" className={styles.infoIconLink} aria-label="About">
       <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/></svg>
      </a>
      <a href="/ajay-resume" title="Resume" className={styles.infoIconLink} aria-label="Resume">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
      </a>
      <a href="https://sites.google.com/view/004ajay" title="Portfolio" className={styles.infoIconLink} target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      </a>
      <a href="https://github.com/004Ajay" title="GitHub" className={styles.infoIconLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      </a>
      <a href="https://medium.com/@ajaytshaju" title="Medium" className={styles.infoIconLink} target="_blank" rel="noopener noreferrer" aria-label="Medium">
        <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" className="bi bi-medium"><path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/ajay-t-shaju/" title="LinkedIn" className={styles.infoIconLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" className="bi bi-linkedin"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
      </a>
    </div>
    </div>
      </main>
    </Layout>
  );
}

export default Home;