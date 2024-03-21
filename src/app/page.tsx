// Importing necessary components and hooks from Next.js and React
'use client'

import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.scss'; // Assuming you have CSS module for styling
import { Button } from 'react-bootstrap';
import webdevGlogo from '../../public/webdevGlogo.png'
import ContactUs from './components/contact-us';



const Home = () => {
  const [showContact, setShowContact] = useState<boolean>(false);

  const toggleContactInfo = () => {
    setShowContact(!showContact);
  };

  const targetRef = useRef<HTMLDivElement>(null);
  // const scrollToBoxOneCard = () => {
  // targetRef.current?.scrollTop({ behavior: 'smooth' });
  // };
  const scrollToTop = () => {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>G Website Development</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      {!showContact ? (
        <main className={styles.main}>
          {/* Logo toggling */}
          <div className={styles.logoBox} onClick={toggleContactInfo}>
            <h3 className={styles.contactArrow}> Need a website? &rarr;</h3>
            <Image src={webdevGlogo} alt="" className={styles.mainLogo} />
            {/* <div className={styles.contactInfo }  > */}
          </div>

          <h1 className={styles.title}>
            Welcome to
          </h1>
          <h1 className={styles.title}>
            GearUp WebDev Solutions
          </h1>

          <div className={styles.projects}>
            <Button onClick={scrollToTop} className={styles.card} >
              <br />
              <br />
              <h1>FitstaX</h1>
              <h1 style={{ fontSize: "3em" }}>&darr;</h1>
            </Button>
            
          </div>
        </main>
      ) : (
        <div className={`${styles.contactInfo} ${showContact ? styles.slideInRight : ''}`}>
          <h1 onClick={toggleContactInfo}>&larr;</h1>
          <ContactUs />
        </div>
      )}
      <div style={{ margin: "20em 10px", border: "3px dotted red" }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugiat! Vero asperiores iste maiores, eligendi error rem quas numquam explicabo adipisci? Qui vitae saepe culpa. Nesciunt sapiente possimus quidem ut.</p>
      </div>
      <div ref={targetRef}>
        <h1>hello</h1>
      </div>

      <footer className={styles.footer}>
        <a
          href=""
          // href="https://victorgportfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thank You
        </a>
      </footer>
    </div>
  );
}

export default Home;