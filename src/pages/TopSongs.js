import useTopSongs from "../hooks/useTopSongs";
import SongCard from "../components/SongCard";
import LoadingIcon from "../components/LoadingIcon";
import { Link } from "react-router-dom";

const TopSongs = () => {
  const { songs, loading } = useTopSongs();

  return (
    <section>
      {loading && <LoadingIcon />}

      {songs.length > 0 && (
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <Link to={`/song/${song.id}`}>
                <SongCard song={song} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TopSongs;
