import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import { useHistory } from '@docusaurus/router';

import styles from '../css/custom.module.css';

interface Suggestion {
  name: string;
  url: string;
}

const allSuggestions: Suggestion[] = [
  { name: "About", url: "/about" },
  { name: "Resume", url: "/ajay-resume" },
  { name: "Blog", url: "/blog" },
  { name: "AI Dangerous to YouTubers", url: "/blog/ai-dangerous-to-youtubers" },
  { name: "Blog Archive", url: "/blog/archive" },
  { name: "Bash to Fish", url: "/blog/bash-to-fish" },
  { name: "Books Blog", url: "/blog/books-blog" },
  { name: "Data Driven Car Buying", url: "/blog/data-driven-car-buying" },
  { name: "Dual Booting Windows Ubuntu", url: "/blog/dual-booting-windows-ubuntu" },
  { name: "Emotion2Emoji", url: "/blog/emotion2emoji" },
  { name: "Jupyter Notebook Keyboard Shortcuts", url: "/blog/jupyter-notebook-keyboard-shortcuts" }
];

function Home(): JSX.Element {
  const [showSplash, setShowSplash] = useState(true);
  const [randomSuggestions, setRandomSuggestions] = useState<Suggestion[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    const shuffled = [...allSuggestions].sort(() => 0.5 - Math.random());
    setRandomSuggestions(shuffled.slice(0, 3));

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
          <input type="text" className={styles.splashInput} readOnly />
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

        <div className={styles.suggestionsArea}>
          {randomSuggestions.map((item, index) => (
            <button
              key={index}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(item.url)}
            >
              {item.name}
            </button>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Home;