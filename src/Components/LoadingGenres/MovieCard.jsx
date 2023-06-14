import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie, handleFavorite, isFavorite }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in "
      />
      <p onClick={() => handleFavorite(movie)}>
        {isFavorite ? (
          <AiFillHeart className=" cursor-pointer top-4 text-gray-300 left-0" />
        ) : (
          <AiOutlineHeart className=" cursor-pointer top-4 text-gray-300" />
        )}
      </p>
    </>
  );
}

export default MovieCard;
