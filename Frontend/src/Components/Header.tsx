import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
const Header = () => {
   const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-green-800 p-5 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight ">
          <Link to="/">ZaidPlaces</Link>
        </span>
        <span className="flex space-x-2 px-5">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings">My Bookings</Link>
              <Link to="/my-hotels">My Bookings</Link>
              <button>Sign out</button>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
