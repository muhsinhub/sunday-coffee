import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Come visit</p>
        <h1 className={styles.title}>Find us</h1>
        <p className={styles.sub}>Kettle&apos;s on. Doors are open. We&apos;d love to see you.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.card}>
            <h2>📍 Where</h2>
            <p>42 Garden Street</p>
            <p>Your City, 00000</p>
          </div>
          <div className={styles.card}>
            <h2>🕐 When</h2>
            <div className={styles.hours}>
              <div><span>Mon – Fri</span><span>7am – 4pm</span></div>
              <div><span>Sat – Sun</span><span>8am – 5pm</span></div>
            </div>
          </div>
          <div className={styles.card}>
            <h2>👋 Say hello</h2>
            <p>(000) 000-0000</p>
            <p>hello@sundaycoffee.com</p>
            <p>@sundaycoffee</p>
          </div>
        </div>

        <div className={styles.mapWrap}>
          <div className={styles.map}>
            <span>🗺️</span>
            <p>Embed a Google Map here</p>
            <p className={styles.mapHint}>Google Maps → Share → Embed a map → copy the iframe</p>
          </div>
        </div>
      </div>
    </div>
  )
}
