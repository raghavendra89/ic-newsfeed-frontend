import { useContext } from 'react';
import NewsSearch from './NewsSearch.jsx';
import FilterIcon from './FilterIcon.jsx';
import { NavLink } from "react-router";
import {UserContext} from '@/lib/UserContext.js';
import api from '@/lib/api.js';

export default function TopHeader() {
  const user = useContext(UserContext);

  const changeTheme = (theme) => {
    if (theme == 'dark') {
      document.getElementsByTagName('body')[0]
              .setAttribute('data-bs-theme', 'dark');
    } else {
      document.getElementsByTagName('body')[0]
              .removeAttribute('data-bs-theme');
    }
  }

  const logOut = () => {
    api.post('logout')
        .then(() => {
          window.location.replace('/');
        })
  }

  return (
    <header className="navbar navbar-expand-md d-print-none" >
      <div className="container-xl">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <NavLink className="d-flex align-items-center text-decoration-none" to="/">
            <svg className="navbar-brand-image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30"><path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
            <span className="ms-1">
              NewsFeed
            </span>
          </NavLink>
        </h1>

        <div className="my-2 my-md-0 d-none d-md-block">
          <NewsSearch />
        </div>

        <div className="navbar-nav flex-row order-md-last">
          <div className="d-none d-md-flex me-1">
            <FilterIcon />

            <span
              className="nav-link px-0 hide-theme-dark pointer"
              title="Enable dark mode"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              onClick={() => changeTheme('dark')}
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>
            </span>

            <span
              className="nav-link px-0 hide-theme-light pointer"
              title="Enable light mode"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              onClick={() => changeTheme('light')}
              >
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>
            </span>
          </div>

          {
            ! user &&
            <div className="nav-item dropdown">
              <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                <span className="avatar avatar-sm">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-cog"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" /><path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19.001 15.5v1.5" /><path d="M19.001 21v1.5" /><path d="M22.032 17.25l-1.299 .75" /><path d="M17.27 20l-1.3 .75" /><path d="M15.97 17.25l1.3 .75" /><path d="M20.733 20l1.3 .75" /></svg>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <span
                  className="dropdown-item pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#signup-modal"
                  >
                    Sign Up
                  </span>
                <span
                  className="dropdown-item pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#signin-modal"
                  >
                    Sign In
                  </span>
              </div>
            </div>
          }

          {
            user &&
            <div className="nav-item dropdown">
              <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
                <span className="avatar avatar-sm">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" /><path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" /></svg>
                </span>
                <div className="d-none d-xl-block ps-2">
                  <div>{ user.first_name }</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a href="./profile.html" className="dropdown-item pointer">Profile</a>
                <div className="dropdown-divider"></div>
                <span
                  className="dropdown-item pointer"
                  onClick={ logOut }
                  >Logout</span>
              </div>
            </div>
          }
        </div>
      </div>
    </header>
  );
}