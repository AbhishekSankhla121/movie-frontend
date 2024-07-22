import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, getMovie } from "../redux/action/movie";
import toast from "react-hot-toast";
interface RootState {
  details: {
    message: string | null;
    error: string | null;
  };
}
export default function CreateMovies() {
  const { message, error } = useSelector((state: RootState) => state.details);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState<string | number>("");
  const [rating, setRating] = useState<string | number>("");
  const [err, setErr] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!title || !genre || !year || !rating) {
      return setErr(true);
    }

    const yearNum = Number(year);
    const ratingNum = Number(rating);

    if (isNaN(yearNum) || isNaN(ratingNum)) {
      return setErr(true);
    }

    console.log("working");
    dispatch(createMovie({ title, year, genre, rating }));
    setErr(false); // reset error state if all checks pass
  };

  useEffect(() => {
    console.log("wokring 2");
    if (error) {
      console.log("error", error);
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [error, message]);

  return (
    <>
      <div
        className="bg-slate-200 flex flex-col p-2 rounded-2xl w-[40%] h-[500px] my-5 mx-auto "
        id="show-data"
      >
        <h1 className="text-center bg-gradient-to-r from-[#00D1DE] to-[#7e0e79] bg-clip-text text-transparent font-bold text-[30px] uppercase">
          Create Movie
        </h1>

        <div className="flex-col w-[80%] mx-auto flex items-center bg-slate-100 h-[80%] mt-5 rounded-xl">
          <div className="flex-col items-centers">
            <div className="my-6">
              <input
                type="text"
                id="title"
                className="btn-style"
                placeholder="Enter Unique Title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
              {err && !title && (
                <p className="text-red-500 mt-2">Please enter title fied</p>
              )}
            </div>

            <div className="my-6">
              <input
                type="text"
                id="Genre"
                placeholder="Enter Genre"
                className="btn-style"
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
                value={genre}
              />
              {err && !genre && (
                <p className="text-red-500 mt-2">Please enter genre field</p>
              )}
            </div>
            <div className="my-6">
              <input
                type="text"
                id="year"
                placeholder="Enter Year (eg. 2024)"
                className="btn-style"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
                value={year}
              />
              {err && !year && (
                <p className="text-red-500 mt-2">Please enter year field</p>
              )}
              {err && isNaN(Number(year)) && (
                <p className="text-red-500 mt-2">Enter year: (eg. 2022)</p>
              )}
            </div>
            <div className="my-6">
              <input
                type="text"
                id="rating"
                placeholder="Enter Rating"
                className="btn-style"
                onChange={(e) => {
                  setRating(e.target.value);
                }}
                value={rating}
              />
              {err && !rating && (
                <p className="text-red-500 mt-2">Please enter rating field</p>
              )}
              {err && isNaN(Number(rating)) && (
                <p className="text-red-500 mt-2">Enter rating: (eg. 0-5)</p>
              )}
            </div>
          </div>

          <div
            onClick={handleSubmit}
            className="p-[1px] text-center md:flex obsidian-Tier rounded-[4.35px] cursor-pointer w-[300px] bg-gradient-to-r from-[#08B1DB] to-[#874BD2] font-semibold text-[20.42px] leading-[18.1px] text-[#FFFFFF]"
          >
            <div
              className="h-[100%] rounded-[4.35px] opacity-[0.7] z-1 w-[100%] all-center p-2 bg-gradient-to-r from-[#18313D] to-[#25273B]"
              id="name"
            >
              <span className="z-10 text-[20px]">Add Movie</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
