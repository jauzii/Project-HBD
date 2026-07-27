import { useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'

function MusicButton() {
  const audioRef = useRef(null)
  const [musicPlaying, setMusicPlaying] = useState(false)

  const toggleMusic = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    if (musicPlaying) {
      audio.pause()
      setMusicPlaying(false)
      return
    }

    try {
      await audio.play()
      setMusicPlaying(true)
    } catch {
      setMusicPlaying(false)
    }
  }

  return (
    <div className="music-control">
      <audio ref={audioRef} loop preload="none" src="/music/background.mp3" />
      <button
        className="music-button"
        type="button"
        aria-label={musicPlaying ? 'Pause music' : 'Play music'}
        aria-pressed={musicPlaying}
        onClick={toggleMusic}
      >
        {musicPlaying ? <Pause size={20} /> : <Music size={20} />}
      </button>
    </div>
  )
}

export default MusicButton
