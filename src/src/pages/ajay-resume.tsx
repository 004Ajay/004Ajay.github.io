import React from 'react';
import Layout from '@theme/Layout';

export default function ResumePage() {
  const resumeDownloadLink = "https://drive.google.com/uc?export=download&id=1YL3k3J1obpt4klVzmQ4M6q92ibMXQANm";

  // Docusaurus theme colors for the button
  const buttonBackgroundColor = 'var(--ifm-color-primary)';
  const buttonTextColor = 'var(--ifm-font-color-inverse)';
  const buttonHoverColor = 'var(--ifm-color-primary-dark)';

  return (
    <Layout title="Ajay's Resume" description="Ajay's professional resume">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        // Calculate height to fill the viewport minus Docusaurus header/footer
        minHeight: 'calc(100vh - var(--ifm-navbar-height, 0px) - var(--ifm-footer-height, 0px))',
        padding: '0',
        margin: '0',
        width: '100vw',
        boxSizing: 'border-box',
      }}>
        <header style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
        }}>
          <h1>Ajay's Resume</h1>
        </header>

        <section style={{
          flexGrow: 1, // This allows the section to take up all available vertical space
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden', // Ensures no scrollbars on the section itself
          backgroundColor: 'var(--ifm-background-color)',
        }}>
          <iframe
            src="https://drive.google.com/file/d/1YL3k3J1obpt4klVzmQ4M6q92ibMXQANm/preview"
            width="1000"
            height="700" // Makes the iframe fill its parent (the section)
            style={{
              border: 'none',
              borderRadius: '0',
              boxShadow: 'none',
              // The iframe content might still scroll if the PDF is too large for the iframe's dimensions
              // or if Google Drive's viewer adds its own scrollbar.
            }}
            title="Ajay's Resume"
            allowFullScreen
          ></iframe>
        </section>

        <section style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
        }}>
          <a
            href={resumeDownloadLink}
            download="Ajay_Resume.pdf"
            style={{
              display: 'inline-block',
              padding: '12px 25px',
              backgroundColor: buttonBackgroundColor,
              color: buttonTextColor,
              textDecoration: 'none',
              borderRadius: '35px',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonBackgroundColor}
          >
            Download Resume
          </a>
        </section>
      </div>
    </Layout>
  );
}