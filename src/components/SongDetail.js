const SongDetail = ({ info }) => {
  console.log(info);
  const {
    artistName,
    artworkUrl100,
    collectionName,
    trackName,
    releaseDate,
    trackViewUrl,
  } = info;

  return (
    <section className="song-detail">
      <h2>
        {trackName} · {releaseDate}
      </h2>
      <h3>{artistName}</h3>
      <img src={artworkUrl100} alt={trackName} />
      <h4>{collectionName}</h4>
    </section>
  );
};

export default SongDetail;
