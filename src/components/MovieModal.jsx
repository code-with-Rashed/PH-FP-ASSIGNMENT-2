const MovieModal = ({ movie, onClose, open }) => {
  const { name, summary, image, rating, premiered, genres } = movie?.show || movie;
  return (
    <dialog id="my_modal_1" className="modal" open={open}>
      <div className="modal-box">
        <div className="card bg-base-100 shadow-sm w-full">
          <figure>
            <img src={image?.medium} alt="Poster" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <div className="badge badge-soft badge-primary flex justify-between w-full py-4 items-center">
              <span>⭐ Rating: {rating?.average}</span>
              <span className="font-extrabold">|</span>
              <span>📅 Release: {new Date(premiered).getFullYear()}</span>
            </div>
            <p dangerouslySetInnerHTML={{ __html: summary }}></p>
            <div className="card-actions justify-start m-1">
              {genres.map((genre, index) => (
                <div className="badge badge-outline" key={index}>
                  {genre}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn rounded-full" onClick={onClose}>
              X
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
export default MovieModal;
