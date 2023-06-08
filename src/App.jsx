import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './App.module.scss';
import illustration from './assets/illustration-dashboard.png';
import logo from './assets/logo.svg';

function App() {

  return (
    <div className={styles.container}>
      <header>
        <img src={logo} alt="logo" />
      </header>
      <main className={styles.main}>
        <h2>We are launching <span>soon!</span></h2>
        <h3>Subscribe and get notified</h3>
        <form>
          <input type="email" placeholder="Your email address..." />
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
