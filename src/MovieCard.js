import './MovieCard.css'

const MovieCard = ({ posterUrl, title, type }) => {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <div className="movie-card-info">
        <p>{title}</p>
        <div>
          <span className="movie-card-pill">{type}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;