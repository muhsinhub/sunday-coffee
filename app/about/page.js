import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Our story</p>
        <h1 className={styles.title}>A bright little corner of the neighbourhood</h1>
      </div>

      <section className={styles.story}>
        <div className={styles.imageWrap}>
          <div className={styles.image}><span>🌿</span></div>
        </div>
        <div className={styles.text}>
          <p>
            Sunday Coffee started with a simple idea: a bright, friendly space where
            good coffee meets a slower pace. We opened our doors in 2021 and have been
            pouring for our neighbours ever since.
          </p>
          <p>
            Every cup starts with beans roasted just down the road, and every plate is
            made fresh in our little kitchen each morning. No shortcuts, no fuss —
            just honest food and drink, served with a smile.
          </p>
          <p>
            Whether you&apos;re here to work, catch up with a friend, or simply enjoy a
            quiet moment, you&apos;re always welcome. Pull up a chair and make yourself
            at home.
          </p>
        </div>
      </section>

      <section className={styles.values}>
        {[
          { emoji: '🌱', title: 'Local first', text: 'We source from nearby roasters, bakers, and farms wherever we can.' },
          { emoji: '♻️', title: 'Low waste', text: 'Compostable cups, reusable discounts, and as little waste as possible.' },
          { emoji: '🤝', title: 'Everyone welcome', text: 'A warm, inclusive space for the whole neighbourhood.' },
        ].map((v) => (
          <div key={v.title} className={styles.valueCard}>
            <span className={styles.valueEmoji}>{v.emoji}</span>
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
