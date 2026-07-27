import { motion } from 'framer-motion'

function Greeting({ onContinue }) {
  return (
    <section className="greeting-screen" aria-labelledby="greeting-title">
      <motion.div
        className="greeting-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="greeting-kicker">Special delivery</p>
        <h1 className="greeting-title" id="greeting-title">
          Happy Birthday!
        </h1>
        <p className="greeting-message">
          <span>Hope your day feels bright, silly, and full of tiny wins.</span>
        </p>
        <button className="greeting-button" type="button" onClick={onContinue}>
          Continue
        </button>
      </motion.div>
    </section>
  )
}

export default Greeting
