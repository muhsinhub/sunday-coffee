import Link from 'next/link'
import styles from './page.module.css'

const highlights = [
  { emoji: '☕', title: 'Speciality Coffee', text: 'Single-origin beans, roasted locally, poured by people who care.' },
  { emoji: '🥐', title: 'Fresh Bakes', text: 'Pastries and brunch made from scratch every morning.' },
  { emoji: '🌿', title: 'A Calm Corner', text: 'Bright, plant-filled space to work, meet, or simply slow down.' },
]

const favourites = [
  { name: 'Flat White', desc: 'Silky microfoam, double shot, our house blend.', price: '$4.5' },
  { name: 'Avocado Toast', desc: 'Sourdough, smashed avo, chilli, poached egg, lemon.', price: '$11' },
  { name: 'Cinnamon Bun', desc: 'Warm, gooey, baked fresh each morning.', price: '$5' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroText}>
              <p className={styles.heroTag}>Open 7 days a week</p>
              <h1 className={styles.heroTitle}>
                Good mornings<br />start here
              </h1>
              <p className={styles.heroSub}>
                A bright neighbourhood café serving speciality coffee, fresh brunch,
                and homemade bakes. Pull up a chair and stay a while.
              </p>
              <div className={styles.heroBtns}>
                <Link href="/menu" className={styles.btnPrimary}>See the Menu</Link>
                <Link href="/contact" className={styles.btnGhost}>Find Us</Link>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <div className={styles.heroImage}>
                <span>☕</span>
                <p>Add a bright café photo here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className={styles.highlights}>
        <div className="container">
          <div className={styles.highlightGrid}>
            {highlights.map((h) => (
              <div key={h.title} className={styles.highlightCard}>
                <span className={styles.highlightEmoji}>{h.emoji}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favourites */}
      <section className={styles.favourites}>
        <div className="container">
          <div className={styles.favHeader}>
            <div>
              <p className={styles.eyebrow}>Loved by regulars</p>
              <h2 className={styles.sectionTitle}>A few of our favourites</h2>
            </div>
            <Link href="/menu" className={styles.seeAll}>See full menu</Link>
          </div>

          <div className={styles.favGrid}>
            {favourites.map((f) => (
              <div key={f.name} className={styles.favCard}>
                <div className={styles.favImg}><span>🍽️</span></div>
                <div className={styles.favInfo}>
                  <div className={styles.favRow}>
                    <h3>{f.name}</h3>
                    <span className={styles.favPrice}>{f.price}</span>
                  </div>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Come say hello</h2>
            <p className={styles.ctaText}>
              We&apos;re on the corner of Garden Street, kettle on and doors open.
            </p>
            <Link href="/contact" className={styles.btnLight}>Get Directions</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
