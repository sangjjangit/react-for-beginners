import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// https://movies-api.accel.li/api/v2/movie_details.json?movie_id=59301
function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  console.log(id);

  const getMovies = async () => {
    const response = await fetch(
      `https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`,
    );
    const json = await response.json();
    setData(json.data.movie);
    setLoading(false);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={data.medium_cover_image} />
          <h2>{data.title}</h2>
          <p>{data.description_intro}</p>
          <ul>
            {data.genres.map((g) => {
              return <li key={g}>{g}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
