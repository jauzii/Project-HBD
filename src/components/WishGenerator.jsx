import { useState } from 'react'
import { motion } from 'framer-motion'

const wishes = [
  'May today bring the kind of laugh that resets the whole week.',
  'May your next chapter be light, brave, and full of good surprises.',
  'May small wins keep finding you at exactly the right time.',
]

function WishGenerator({ onContinue }) {
  const [currentWish, setCurrentWish] = useState(wishes[0])
  const [flipCount, setFlipCount] = useState(0)

  const generateWish = () => {
    const nextIndex = (wishes.indexOf(currentWish) + 1) % wishes.length

    setCurrentWish(wishes[nextIndex])
    setFlipCount(flipCount + 1)
  }

  return (
    <section className="wish-generator" aria-labelledby="wish-title">
      <div className="wish-card-wrap">
        <p className="wish-kicker">Wish generator</p>
        <h2 className="wish-title" id="wish-title">
          Pick a birthday wish
        </h2>

        <motion.div
          className="wish-card"
          key={flipCount}
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <p>{currentWish}</p>
        </motion.div>

        <button className="wish-button" type="button" onClick={generateWish}>
          Generate wish
        </button>
        <button className="wish-button wish-button-secondary" type="button" onClick={onContinue}>
          Read letter
        </button>
      </div>
    </section>
  )
}

export default WishGenerator
