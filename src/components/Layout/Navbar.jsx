import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="flex items-center gap-1 text-xl">
          <img src="/movie-player-logo.gif" alt="Logo" />
          <span className="font-semibold">MovieExplorer</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/movies" className="font-semibold text-[16px]">
              Movies
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
