const getSongDetail = async (id) => {
  try {
    const res = await fetch(
      `https://api.allorigins.win/raw?url=https://itunes.apple.com/lookup?id=${id}&entity=song`
    );

    if (res.ok) {
      const body = await res.json();
      const [info] = body.results;
      //   console.log(info);
      //   console.log(info.kind, "king");
      return info;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getSongDetail;
