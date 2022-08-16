const SongCard = ({ song }) => {
  const { name, artistName, artworkUrl100 } = song;

  return (
    <article className="song-card">
      <img src={artworkUrl100} alt={name} />
      <h2>{name}</h2>
      <h3>{artistName} </h3>
    </article>
  );
};

export default SongCard;
