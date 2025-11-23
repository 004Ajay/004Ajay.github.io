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
          <p className={styles.subtitle}>Personal Website</p>
        </header>

        <input
          type="text"
          className={styles.searchBar}
          placeholder="search something..."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />

 <div className={styles.suggestionsArea} style={{marginTop: '100px', fontSize: '500px' }}>
   <button
     className={styles.suggestionItem}
     onClick={() => handleSuggestionClick('/about')}>
       🛈
    </button>
    </div>
      </main>
    </Layout>
  );
}

export default Home;