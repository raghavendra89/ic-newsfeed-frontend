import NewsSearch from './NewsSearch.jsx';
import FilterIcon from './FilterIcon.jsx';
import { NavLink, useLocation } from "react-router";

export default function SecondLevelHeader() {
  const location = useLocation();

  return (
    <header className="navbar-expand-md">
      <div className="collapse navbar-collapse" id="navbar-menu">
        <div className="navbar">
          <div className="container-xl">
            <ul className="navbar-nav">
              <li className={"nav-item " + (location.pathname == '/' ? 'active' : '')}>
                <NavLink className="nav-link" to="/">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                  </span>
                  <span className="nav-link-title">
                    Home
                  </span>
                </NavLink>
              </li>

              <li className={"nav-item " + (location.pathname == '/my-feed' ? 'active' : '')}>
                <NavLink className="nav-link" to="/my-feed">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-world-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -8.979 9" /><path d="M3.6 9h16.8" /><path d="M3.6 15h8.9" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a16.992 16.992 0 0 1 2.522 10.376" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>
                  </span>
                  <span className="nav-link-title">
                    Personalized News
                  </span>
                </NavLink>
              </li>
            </ul>

            <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">

            </div>
          </div>
        </div>
      </div>

      <div className="p-2 d-flex d-md-none justify-content-between">
        <NewsSearch />

        <FilterIcon />
      </div>
    </header>
  );
}