import { Link } from "react-router";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://assets.nflxext.com/ffe/siteui/vlv3/4263c437-c678-4724-ad80-e3ba0dc8761e/web/BD-en-20260921-TRIFECTA-perspective_d81a44bb-c188-47b9-ad4b-78922834a26f_large.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">DISCOVER MOVIES</h1>
          <p className="mb-5">
            Explore and discover your favorite movies from around the world.
          </p>
          <Link to="/movies" className="btn btn-primary">
            Explore Now{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
