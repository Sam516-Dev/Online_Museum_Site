import { NavLink } from "react-router-dom";
import logo from "../src/assets/museum-logo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Museum Logo" />
          </div>
          <div className="md:flex hidden">
            <div className="ml-10 flex gap-10 items-baseline space-x-2">
              <NavLink
                exact
                to="/"
                className="text-gray-600 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/collections"
                className="text-gray-600 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Collections
              </NavLink>
              <NavLink
                to="/exhibits"
                className="text-gray-600 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                Exhibits
              </NavLink>
              <NavLink
                to="/aboutus"
                className="text-gray-600 hover:text-blue-500"
                activeClassName="border-b-2 border-blue-500"
              >
                About Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
