import { useEffect, useState } from "react";
import getTopSongs from "../services/getTopSongs";

const useTopSongs = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //esto se puede reemplazar por un .then
    const fetchSongs = async () => {
      const data = await getTopSongs();

      setSongs(data);
      setLoading(false);
    };

    fetchSongs();
  }, []);

  return { songs, loading };
};

export default useTopSongs;
