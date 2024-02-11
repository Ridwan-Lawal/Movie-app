import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo";
import IconNavHome from "../assets/IconNavHome";
import IconNavMovie from "../assets/IconNavMovie";
import IconNavTvSeries from "../assets/IconNavTvSeries";
import IconNavBookmark from "../assets/IconNavBookmark";

// eslint-disable-next-line react/prop-types
function NavBar() {
  const isNavLinkActive = (path) => {
    return window.location.pathname === path;
  };
  return (
    <nav className="bg-slate-900 flex items-center justify-between px-4 rounded-2xl py-2">
      <Logo />

      <ul className="flex items-center gap-10">
        <li>
          <NavLink to="/" className="group">
            <IconNavHome isActive={isNavLinkActive("/")} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">
            <IconNavMovie isActive={isNavLinkActive("/movies")} />
          </NavLink>
        </li>

        <li>
          <NavLink to="/tvseries">
            <IconNavTvSeries isActive={isNavLinkActive("/tvseries")} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmark">
            <IconNavBookmark isActive={isNavLinkActive("/bookmark")} />
          </NavLink>
        </li>
      </ul>

      <section className="border-2 rounded-full">
        <img src="/src/assets/image-avatar.png" alt="" className="w-[38px]" />
      </section>
    </nav>
  );
}

export default NavBar;
