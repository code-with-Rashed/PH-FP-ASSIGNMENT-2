import { useState } from "react";
import MovieModal from "./MovieModal";

const Movie = ({ movie }) => {
  const { name, image, rating, premiered } = movie;
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm border border-green-300">
        <figure>
          <img
            src={image?.medium}
            alt="Poster"
            className="w-full object-fill"
          />
        </figure>
        <div className="card-body space-y-3">
          <h2 className="card-title">{name}</h2>
          <div className="badge badge-soft badge-primary flex justify-between w-full py-4 items-center">
            <span>⭐{rating?.average}</span>
            <span className="font-extrabold text-xl">.</span>
            <span>📅 {new Date(premiered).getFullYear()}</span>
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={() => setOpenModal(true)}
            >
              See Details
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <MovieModal
          movie={movie}
          onClose={() => setOpenModal(false)}
          open={openModal}
        />
      )}
    </>
  );
};
export default Movie;
