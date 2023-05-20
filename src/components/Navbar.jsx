import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <nav className="navbar w-11/12 md:w-10/12 mx-auto shadow-md px-4 md:px-16 py-5 bg-white flex justify-between rounded-sm">
      <div className="menu-links flex gap-12 items-center">
        <div className="logo flex justify-between items-center">
          <Link
            to="/"
            className="logo text-turquoise font-bold text-sm md:text-3xl"
          >
            Bookstore CMS
          </Link>
          <button
            type="button"
            onClick={() => setIsShowing((isShowing) => !isShowing)}
            className="cursor-pointer ml-[11.7rem] md:hidden block"
          >
            {isShowing ? (
              <FontAwesomeIcon icon={faTimes} className="text-turquoise" />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-turquoise"
              />
            )}
          </button>
        </div>
        <div className="other-navlinks hidden md:flex gap-6 items-center">
          <NavLink to="/" className="uppercase tracking-wider text-slate-400">
            BOOKS
          </NavLink>
          <NavLink
            to="categories"
            className="uppercase tracking-wider text-slate-400"
          >
            CATEGORIES
          </NavLink>

          <FontAwesomeIcon
            icon={faUser}
            className="text-turquoise border border-slate-200 p-4 rounded-full ml-80"
          />
        </div>

        <Transition
          show={isShowing}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="other-navlinks md:hidden flex flex-col gap-12 absolute z-30
            top-36 left-4 bg-turquoise w-11/12 mx-auto h-screen pl-3"
          >
            <NavLink
              to="/"
              className="uppercase tracking-wider text-white pt-8"
            >
              BOOKS
            </NavLink>
            <NavLink
              to="categories"
              className="uppercase tracking-wider text-white"
            >
              CATEGORIES
            </NavLink>

            <FontAwesomeIcon
              icon={faUser}
              className="text-slate-200 border border-slate-200 p-4 rounded-full h-5 w-5"
            />
          </div>
        </Transition>
      </div>
    </nav>
  );
}

export default Navbar