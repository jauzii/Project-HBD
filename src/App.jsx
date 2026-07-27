import { useState } from 'react'
import AchievementModal from './components/AchievementModal'
import CandleGame from './components/CandleGame'
import GiftBox from './components/GiftBox'
import Greeting from './components/Greeting'
import MusicButton from './components/MusicButton'
import WishGenerator from './components/WishGenerator'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState('gift')
  const [achievementUnlocked, setAchievementUnlocked] = useState(false)

  return (
    <main className="app-shell">
      <div className="app-stage">
        <MusicButton />
        {currentStep === 'gift' && <GiftBox onOpened={() => setCurrentStep('greeting')} />}
        {currentStep === 'greeting' && <Greeting onContinue={() => setCurrentStep('game')} />}
        {currentStep === 'game' && (
          <CandleGame onComplete={() => setAchievementUnlocked(true)} />
        )}
        {currentStep === 'wish' && <WishGenerator />}
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
