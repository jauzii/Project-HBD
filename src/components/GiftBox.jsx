import { useState } from 'react'
import Confetti from 'react-confetti'
import { motion } from 'framer-motion'

function GiftBox() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="gift-screen" aria-label="Open birthday gift">
      {isOpen && <Confetti recycle={false} numberOfPieces={160} />}

      <div className="gift-content">
        <p className="gift-kicker">Tap the gift</p>
        <button
          className={`gift-box ${isOpen ? 'gift-box-open' : ''}`}
          type="button"
          aria-pressed={isOpen}
          aria-label={isOpen ? 'Gift opened' : 'Open gift'}
          onClick={() => setIsOpen(true)}
        >
          <motion.span
            className="gift-lid"
            animate={
              isOpen
                ? { y: -42, rotate: -12, scale: 1.02 }
                : { rotate: [0, -3, 3, -2, 2, 0] }
            }
            transition={
              isOpen
                ? { duration: 0.45, ease: 'easeOut' }
                : { duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }
            }
          />
          <motion.span
            className="gift-body"
            animate={isOpen ? { scale: 1.03 } : { scale: [1, 1.02, 1] }}
            transition={
              isOpen
                ? { duration: 0.35, ease: 'easeOut' }
                : { duration: 1.4, repeat: Infinity, repeatDelay: 1.2 }
            }
          />
          <span className="gift-ribbon gift-ribbon-vertical" />
          <span className="gift-ribbon gift-ribbon-horizontal" />
          {isOpen && <span className="gift-glow" aria-hidden="true" />}
        </button>
      </div>
    </section>
  )
}

export default GiftBox
