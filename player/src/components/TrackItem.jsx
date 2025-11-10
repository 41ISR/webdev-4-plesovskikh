

function TrackItem({ track, number }) {
  const {
    name,
    artists,
    album,
    albumArt,
    duration,
    popularity
  } = track

  // Форматирование длительности из миллисекунд в минуты:секунды
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = Math.floor((ms % 60000) / 1000)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handlePlay = () => {
    console.log('Playing:', name)
    // Здесь можно добавить логику воспроизведения
  }

  return (
    <li className="track-item">
      <div className="track-number">{number}</div>
      
      <div className="track-main">
        <img
          src={albumArt}
          alt={album}
          className="album-art"
          loading="lazy"
        />
        <div className="track-info">
          <div className="track-name">{name}</div>
          <div className="track-artists">{artists?.join(', ')}</div>
          <div className="track-album">{album}</div>
        </div>
      </div>
      
      <div className="track-meta">
        <div className="duration">{formatDuration(duration)}</div>
        <div className="popularity">♪ {popularity}</div>
      </div>

      <button className="play-button" onClick={handlePlay}>
        ▶
      </button>
    </li>
  )
}

export default TrackItem