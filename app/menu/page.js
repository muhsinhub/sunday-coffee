import styles from './menu.module.css'

const menu = [
  {
    title: 'Coffee',
    items: [
      { name: 'Espresso', desc: 'Rich, bold, single or double.', price: '$3' },
      { name: 'Flat White', desc: 'Silky microfoam, double shot.', price: '$4.5' },
      { name: 'Cappuccino', desc: 'Espresso, steamed milk, airy foam.', price: '$4.5' },
      { name: 'Cortado', desc: 'Equal parts espresso and warm milk.', price: '$4' },
      { name: 'Cold Brew', desc: 'Slow-steeped 18 hours, smooth and sweet.', price: '$5' },
    ],
  },
  {
    title: 'Not Coffee',
    items: [
      { name: 'Matcha Latte', desc: 'Ceremonial grade matcha, your choice of milk.', price: '$5' },
      { name: 'Chai Latte', desc: 'Spiced black tea, steamed milk, honey.', price: '$4.5' },
      { name: 'Hot Chocolate', desc: 'Real dark chocolate, no powders.', price: '$4.5' },
      { name: 'Fresh Juice', desc: 'Orange or seasonal — ask us.', price: '$5' },
    ],
  },
  {
    title: 'Brunch',
    items: [
      { name: 'Avocado Toast', desc: 'Sourdough, smashed avo, chilli, poached egg.', price: '$11' },
      { name: 'Granola Bowl', desc: 'House granola, yoghurt, seasonal fruit, honey.', price: '$9' },
      { name: 'Breakfast Roll', desc: 'Egg, bacon or halloumi, relish, brioche.', price: '$8' },
      { name: 'Shakshuka', desc: 'Baked eggs, spiced tomato, feta, warm bread.', price: '$12' },
    ],
  },
  {
    title: 'Bakes',
    items: [
      { name: 'Cinnamon Bun', desc: 'Warm and gooey, baked fresh daily.', price: '$5' },
      { name: 'Butter Croissant', desc: 'Flaky, golden, French butter.', price: '$4' },
      { name: 'Banana Bread', desc: 'Toasted, with a smear of butter.', price: '$4.5' },
      { name: 'Cookie of the Day', desc: 'Ask at the counter — always something good.', price: '$3.5' },
    ],
  },
]

export default function Menu() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Made fresh, served bright</p>
        <h1 className={styles.title}>Our Menu</h1>
        <p className={styles.sub}>
          Speciality coffee and food made from scratch. Dairy-free and
          gluten-free options always available — just ask.
        </p>
      </div>

      <div className={styles.grid}>
        {menu.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.items}>
              {section.items.map((item) => (
                <div key={item.name} className={styles.item}>
                  <div className={styles.itemHead}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.dots}></span>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </div>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
