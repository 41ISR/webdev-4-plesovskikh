import TrackItem from './TrackItem'


function TrackList({ tracks }) {
  if (!tracks || tracks.length === 0) {
    return <div className="no-tracks">Треки не найдены</div>
  }

  return (
    <ul className="tracks-list">
      {tracks.map((track, index) => (
        <TrackItem
          key={track.id || index}
          track={track}
          number={index + 1}
        />
      ))}
    </ul>
  )
}

export default TrackList