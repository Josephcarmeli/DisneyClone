import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie, handleFavorite, isFavorite }) {
  return (
    <section>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg
      hover:border-[3px] border-gray-400 cursor-pointer
      "
      />
      <h2
        className="w-[110px] md:w-[260px] text-white
      mt-2"
      >
        {movie.title}
      </h2>
      <p onClick={() => handleFavorite(movie)}>
        {isFavorite ? (
          <AiFillHeart className="cursor-pointer absolute top-4 text-black text-[30px]" />
        ) : (
          <AiOutlineHeart className="cursor-pointer absolute top-4 text-black text-[30px]" />
        )}
      </p>
    </section>
  );
}

export default HrMovieCard;
