import { useState, useEffect } from 'react'
import './App.css'
import TrackList from './components/TrackList'

function App() {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://kitek.ktkv.dev/songs.json')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setTracks(data)
      } catch (err) {
        setError(err.message)
        console.error(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Расчет общей длительности
  const totalDuration = tracks.reduce((total, track) => total + track.duration, 0)
  const formatTotalDuration = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return hours > 0 ? `${hours}ч ${remainingMinutes}мин` : `${minutes}мин`
  }

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Загрузка треков...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">Ошибка: {error}</div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1>Моя Музыка</h1>
      
      <div className="stats">
        <div className="total-tracks">Всего треков: {tracks.length}</div>
        <div className="total-duration">Общая длительность: {formatTotalDuration(totalDuration)}</div>
      </div>

      <TrackList tracks={tracks} />
    </div>
  )
}

export default App