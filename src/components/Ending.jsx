import Confetti from 'react-confetti'
import { motion } from 'framer-motion'

function Ending() {
  return (
    <section className="ending-screen" aria-labelledby="ending-title">
      <Confetti recycle={false} numberOfPieces={220} />
      <div className="balloons" aria-hidden="true">
        <span className="balloon balloon-one" />
        <span className="balloon balloon-two" />
        <span className="balloon balloon-three" />
      </div>
      <motion.div
        className="ending-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="ending-kicker">Scrapbook complete</p>
        <h2 className="ending-title" id="ending-title">
          Happy Birthday, again!
        </h2>
        <p className="ending-message">
          That is the end of the little surprise. Hope it made today feel a bit
          more fun.
        </p>
      </motion.div>
    </section>
  )
}

export default Ending
