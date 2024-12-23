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
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
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