import './App.css';
import MovieCard from './MovieCard'

function App() {
  return (
    <>
      <MovieCard title="Batman" type="movie" posterUrl="https://m.media-amazon.com/images/I/81az0oR6izL._AC_.jpg" />
      <MovieCard title="Superman" type="movie" posterUrl="https://m.media-amazon.com/images/I/71dScHBvL-L._AC_SS450_.jpg" />
      <MovieCard title="Spiderman" type="movie" posterUrl="https://m.media-amazon.com/images/I/61-rozyeQQL._AC_SY679_.jpg" />
    </>
  );
}

export default App;
