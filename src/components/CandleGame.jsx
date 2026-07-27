import { useState } from 'react'
import { motion } from 'framer-motion'

const candles = [1, 2, 3]

function CandleGame({ onComplete }) {
  const [blownCandles, setBlownCandles] = useState([])

  const blowCandle = (candleId) => {
    if (blownCandles.includes(candleId)) {
      return
    }

    const nextBlownCandles = [...blownCandles, candleId]
    setBlownCandles(nextBlownCandles)

    if (nextBlownCandles.length === candles.length) {
      onComplete?.()
    }
  }

  const completed = blownCandles.length === candles.length

  return (
    <section className="candle-game" aria-labelledby="candle-game-title">
      <div className="candle-game-card">
        <p className="candle-game-kicker">Blow the candles</p>
        <h2 className="candle-game-title" id="candle-game-title">
          Make a tiny wish
        </h2>

        <div className="cake" aria-label={`${blownCandles.length} of 3 candles blown`}>
          <div className="candles">
            {candles.map((candleId) => {
              const isBlown = blownCandles.includes(candleId)

              return (
                <button
                  className={`candle ${isBlown ? 'candle-blown' : ''}`}
                  type="button"
                  key={candleId}
                  aria-label={isBlown ? `Candle ${candleId} blown` : `Blow candle ${candleId}`}
                  disabled={isBlown}
                  onClick={() => blowCandle(candleId)}
                >
                  {!isBlown && (
                    <motion.span
                      className="flame"
                      aria-hidden="true"
                      animate={{ scale: [1, 1.16, 0.94, 1], y: [0, -2, 1, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                    />
                  )}
                  <span className="wick" aria-hidden="true" />
                  <span className="candle-stick" aria-hidden="true" />
                </button>
              )
            })}
          </div>
          <div className="cake-top" />
          <div className="cake-base" />
        </div>

        <p className="candle-game-status">
          {completed ? 'All candles are out.' : 'Tap each flame to blow it out.'}
        </p>
      </div>
    </section>
  )
}

export default CandleGame
