import React, { useState } from "react";
import MovieCard from "../LoadingGenres/MovieCard";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import YouTube from "react-youtube";
import GlobalApi from "../services/GlobalApi";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function SearchResults({ results }) {
  const [favorites, setFavorites] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleFavorite = (movie) => {
    const isFavorite = favorites.some((favorite) => favorite.id === movie.id);
    if (isFavorite) {
      setFavorites(favorites.filter((favorite) => favorite.id !== movie.id));
    } else {
      setFavorites([...favorites, movie]);
    }

    GlobalApi.getMovieTrailer(movie.id)
      .then((res) => {
        const results = res.data.results;
        const youtubeTrailer = results.find(
          (result) => result.site === "YouTube"
        );
        if (youtubeTrailer) {
          setTrailerUrl(youtubeTrailer.key);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex flex-wrap justify-around">
      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={{ height: "390", width: "640" }} />
      )}
      {results.map((item, index) => {
        const isFavorite = favorites.some(
          (favorite) => favorite.id === item.id
        );
        return (
          <React.Fragment key={index}>
            <MovieCard
              movie={item}
              handleFavorite={handleFavorite}
              isFavorite={isFavorite}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default SearchResults;
