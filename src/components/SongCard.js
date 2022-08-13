const SongCard = ({ song }) => {
  console.log(song);

  const { name, artistName, id, artworkUrl100, url } = song;

  return (
    <article className="song-card">
      <img src={artworkUrl100} alt={name} />
      <h2>{name}</h2>
      <h3>{artistName} </h3>
      <audio>{url}</audio>
      <p>{id}</p>
    </article>
  );
};

export default SongCard;
