import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";
import SignOutButton from "./SignOutButton";
import SearchBar from "./SearchBar";
const Header = () => {
   const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-green-800 p-5 ">
      <div className="container mx-auto flex justify-even">
        <span className="text-3xl text-white font-bold tracking-tight ">
          <Link to="/">ZaidPlaces</Link>
        </span>
        <div className="container mx-auto mt-5 ">
          <SearchBar />
        </div>

        <span className="flex flex-row space-x-6 px-5">
          {isLoggedIn ? (
            <>
              <Link
                className=" items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-places"
              >
                My Places
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/signin"
              className="  bg-white items-center text-green-600 px-3  font-bold hover:bg-gray-100 "
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
