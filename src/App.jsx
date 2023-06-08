import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './App.module.scss';
import illustration from './assets/illustration-dashboard.png';
import logo from './assets/logo.svg';

function App() {
  const [alert, setAlert] = useState(false);

  const verifyEmail = (e) => {
    e.preventDefault();
    const emailInput = document.getElementsByTagName('input')[0];
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      console.log('Email válido:', email);
      setAlert(false)
    } else {
      console.log('Email inválido:', email);
      setAlert(true)
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main className={styles.main}>
        <h2>We are launching <span>soon!</span></h2>
        <h3>Subscribe and get notified</h3>
        <form onSubmit={verifyEmail}>
          <input className={alert ? styles.emailOn : styles.emailOff} type="email" placeholder="Your email address..." />
          <p className={alert ? styles.alertOn : styles.alertOff }>Please provide a valid email address</p> 
          <input type="submit" value="Notify Me"/>
        </form>
        <img src={illustration} alt="main-image" />
      </main>
      <footer>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <FaFacebookF color="hsl(223, 87%, 63%)" />
          </div>
          <div className={styles.icon}>
            <FaTwitter color="hsl(223, 87%, 63%)" />
          </div>
          <div className={styles.icon}>
            <FaInstagram color="hsl(223, 87%, 63%)" />
          </div>
        </div>
        <p>&copy; Copyright Ping. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
