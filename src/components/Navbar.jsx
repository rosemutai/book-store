import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar w-10/12 mx-auto shadow-md px-16 py-5 bg-white flex justify-between rounded-sm">
      <div className="menu-links flex gap-12 items-center">
        <Link to="/" className="logo text-turquoise font-bold text-3xl">
          Bookstore CMS
        </Link>
        <NavLink to="/" className="uppercase tracking-wider text-slate-400">
          BOOKS
        </NavLink>
        <NavLink
          to="categories"
          className="uppercase tracking-wider text-slate-400"
        >
          CATEGORIES
        </NavLink>
      </div>

      <div className="user">
        <FontAwesomeIcon
          icon={faUser}
          className="text-turquoise border border-slate-200 p-4 rounded-full"
        />
      </div>
    </nav>
  );
}

export default Navbar