import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>Sunday<span className={styles.dot}>.</span></span>
          <p className={styles.tagline}>Bright mornings, good coffee, and a place to slow down.</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Visit</h4>
          <p>42 Garden Street</p>
          <p>Your City, 00000</p>
          <p>(000) 000-0000</p>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Hours</h4>
          <p>Mon – Fri: 7am – 4pm</p>
          <p>Sat – Sun: 8am – 5pm</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Sunday Coffee. Made with care.</p>
      </div>
    </footer>
  )
}
