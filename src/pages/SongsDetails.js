import { useParams } from "react-router-dom";
import useSongDetail from "../hooks/useSongDetails";
import LoadingIcon from "../components/LoadingIcon";
import SongDetail from "../components/SongDetail";

const SongsDetails = () => {
  const { id } = useParams();

  const { song, loading } = useSongDetail(id);

  return (
    <section>
      {loading && <LoadingIcon />}
      {song && <SongDetail info={song} />}
    </section>
  );
};

export default SongsDetails;
