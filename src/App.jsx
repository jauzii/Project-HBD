import CandleGame from './components/CandleGame'
import Greeting from './components/Greeting'
import MusicButton from './components/MusicButton'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <div className="app-stage">
        <MusicButton />
        <Greeting />
        <CandleGame />
      </div>
    </main>
  )
}

export default App
