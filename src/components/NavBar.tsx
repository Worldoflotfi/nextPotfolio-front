const NavBar = () => {
    return (
      <nav className="bg-gray-800 text-white fixed w-full top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="text-2xl font-bold">My Portfolio</div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  