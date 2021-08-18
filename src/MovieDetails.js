import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  return (
    <div>
      <div>
        <img src={props.posterUrl} alt={props.title} />
      </div>
      <div>
        <div>
          <p>{props.title}</p>
          <p>{props.rating}</p>
        </div>
        <div>
          <span>{props.rated}</span>
          <span>{props.runtime} min</span>
          <span>{props.genre}</span>
        </div>
        <div>
          <p>Plot</p>
          <p>{props.plot}</p>
        </div>
        <div>
          <p>Actors</p>
          <p>{props.actors}</p>
        </div>
      </div>
    </div>
  )
}

MovieDetails.propTypes = {
  posterUrl: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  rated: PropTypes.string.isRequired, 
  runtime: PropTypes.number.isRequired, 
  genre: PropTypes.string.isRequired, 
  plot: PropTypes.string.isRequired, 
  actors: PropTypes.string.isRequired, 
  rating: PropTypes.number.isRequired, 
}

export default MovieDetails;