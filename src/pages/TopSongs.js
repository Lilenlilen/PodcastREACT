import useTopSongs from "../hooks/useTopSongs";
import SongCard from "../components/SongCard";
import LoadingIcon from "../components/LoadingIcon";

const TopSongs = () => {
  const { songs, loading } = useTopSongs();

  return (
    <section>
      <h2>Top Songs</h2>

      {loading && <LoadingIcon />}
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <SongCard song={song} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TopSongs;
