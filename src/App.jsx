import { useEffect, useState } from 'react'
import AchievementModal from './components/AchievementModal'
import BirthdayLetter from './components/BirthdayLetter'
import CandleGame from './components/CandleGame'
import Ending from './components/Ending'
import GiftBox from './components/GiftBox'
import Greeting from './components/Greeting'
import Loading from './components/Loading'
import MusicButton from './components/MusicButton'
import WishGenerator from './components/WishGenerator'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState('loading')
  const [achievementUnlocked, setAchievementUnlocked] = useState(false)

  useEffect(() => {
    if (currentStep !== 'loading') {
      return undefined
    }

    const loadingTimer = window.setTimeout(() => {
      setCurrentStep('gift')
    }, 900)

    return () => window.clearTimeout(loadingTimer)
  }, [currentStep])

  return (
    <main className="app-shell">
      <div className="app-stage">
        <MusicButton />
        {currentStep === 'loading' && <Loading />}
        {currentStep === 'gift' && <GiftBox onOpened={() => setCurrentStep('greeting')} />}
        {currentStep === 'greeting' && <Greeting onContinue={() => setCurrentStep('game')} />}
        {currentStep === 'game' && (
          <CandleGame onComplete={() => setAchievementUnlocked(true)} />
        )}
        {currentStep === 'wish' && (
          <WishGenerator onContinue={() => setCurrentStep('letter')} />
        )}
        {currentStep === 'letter' && (
          <BirthdayLetter onContinue={() => setCurrentStep('ending')} />
        )}
        {currentStep === 'ending' && <Ending />}
        <AchievementModal
          open={achievementUnlocked}
          onContinue={() => {
            setAchievementUnlocked(false)
            setCurrentStep('wish')
          }}
        />
      </div>
    </main>
  )
}

export default App
