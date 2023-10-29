import React, { useEffect, useState } from "react";
import { moviesList } from "../data";
import { addMovie } from "../store/Slice";
import { useDispatch } from "react-redux";
import "../css/MovieSelect.css";

const MovieSelect = ({ movieToHome }) => {
  const dispatch = useDispatch();
  const [movieData, setMoviedata] = useState("");

  //This function will handle the selection of the movie
  const handleChange = (e) => {
    //This is changing the state "movieData"
    setMoviedata(e.target.value);
    console.log(movieData);

    //sending moviedata to homepage
    movieToHome(e.target.value);

    //This will save the selected movie to the localstorage
    dispatch(addMovie(e.target.value));
  };

  return (
    <>
      <div className="flex flex-col gap-4 border-[2px] border-black rounded-md p-4 sm:w-[800px]">
        <h1 className="flex font-serif font-bold">Select a movie :-</h1>
        <div className="flex flex-wrap gap-4">
          {moviesList.map((movie, index) => {
            return (
              <div key={index}>
                <div className="inline-flex rounded-lg ">
                  <input
                    id={movie}
                    value={movie}
                    type="radio"
                    checked={movie === movieData}
                    className="sr-only"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={movie}
                    className="flex self-center px-4 py-2 text-center border-2 border-black rounded-lg cursor-pointer pool_type hover:opacity-80 bg-lime-200 hover:border-red-700 hover:bg-green-500"
                  >
                    {movie}
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieSelect;
