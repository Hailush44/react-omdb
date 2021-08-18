import './App.css';
import MovieCard from './MovieCard'
import MovieDetails from './MovieDetails'

function App() {
  return (
    <>
      <MovieCard title="Batman" type="movie" posterUrl="https://m.media-amazon.com/images/I/81az0oR6izL._AC_.jpg" />
      {/* <MovieCard title="Superman" type="movie" posterUrl="https://m.media-amazon.com/images/I/71dScHBvL-L._AC_SS450_.jpg" />
      <MovieCard title="Spiderman" type="movie" posterUrl="https://m.media-amazon.com/images/I/61-rozyeQQL._AC_SY679_.jpg" /> */}

      <MovieDetails 
        posterUrl="https://m.media-amazon.com/images/I/81az0oR6izL._AC_.jpg"
        title="Batman"
        rated="PG-13"
        runtime={183}
        genre="Action" 
        plot="Batman beats up bad guys" 
        actors="Ben Affleck" 
        rating={6.4}
      />        
    </>
  );
}

export default App;
