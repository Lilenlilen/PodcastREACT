import { useEffect, useState } from "react";
import getSongDetail from "../services/getSongDetail";

const useSongDetail = (id) => {
  const [song, setSong] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchSongDetail = async () => {
      const data = await getSongDetail(id);

      setSong(data);
      setLoading(false);
    };

    fetchSongDetail();
  }, [id]);

  return { song, loading };
};

export default useSongDetail;
