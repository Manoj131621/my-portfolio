import React from 'react';
import styles from '../assets/App.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <h1>Manojkumar's Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>
    );
  };

  
export default Header;