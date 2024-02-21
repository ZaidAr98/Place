import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import SignOutButton from "./SignOutButton";
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
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-places"
              >
                My Places
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/signin"
              className="flex bg-white items-center text-green-600 px-3 font-bold hover:bg-gray-100 "
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
