import { motion } from 'framer-motion'

function AchievementModal({ open, onContinue }) {
  if (!open) {
    return null
  }

  return (
    <div className="achievement-backdrop" role="presentation">
      <motion.section
        className="achievement-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="achievement-title"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="achievement-glow" aria-hidden="true" />
        <p className="achievement-kicker">Achievement unlocked</p>
        <h2 className="achievement-title" id="achievement-title">
          Candle Champion
        </h2>
        <p className="achievement-message">You blew out every candle.</p>
        <button className="achievement-button" type="button" onClick={onContinue}>
          Continue
        </button>
      </motion.section>
    </div>
  )
}

export default AchievementModal
