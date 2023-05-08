import { NavLink } from "react-router-dom";
import logo from "../src/assets/museum-logo.png";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-600 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  fill-rule="evenodd"
                  d="M2 6h20v2H2V6zm0 5h20v2H2v-2zm0 5h20v2H2v-2z"
                />
                <path
                  className="block"
                  fill-rule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <NavLink
                exact
                to="/"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-600 bg-gray-50 border-gray-200"
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink
                to="/collections"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                onClick={closeMenu}
              >
                Collections
              </NavLink>
              <NavLink
                to="/exhibits"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                onClick={closeMenu}
              >
                Exhibits
              </NavLink>
              <NavLink
                to="/aboutus"
                className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-blue-500"
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
