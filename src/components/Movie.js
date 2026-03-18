import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, imageUrl, title, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img className={styles.movie__img} src={imageUrl} />
      <div className={styles.movie__text}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__sqenres}>
          {genres.map((g) => {
            return <li key={g}>{g}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
