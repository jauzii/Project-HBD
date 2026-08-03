import { motion } from 'framer-motion'

function BirthdayLetter({ onContinue }) {
  return (
    <section className="birthday-letter" aria-labelledby="letter-title">
      <motion.article
        className="letter-paper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <p className="letter-kicker">Birthday letter</p>
        <h2 className="letter-title" id="letter-title">
          A little note for today
        </h2>
        <p>
          I hope this year gives you more reasons to laugh, more calm in the
          middle of busy days, and more tiny moments that feel worth keeping.
        </p>
        <p>
          Keep being curious, stubborn in the best way, and proudly yourself.
          Today is yours.
        </p>
        <button className="letter-button" type="button" onClick={onContinue}>
          Finish
        </button>
      </motion.article>
    </section>
  )
}

export default BirthdayLetter
