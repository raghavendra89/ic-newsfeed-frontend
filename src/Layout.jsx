import { Outlet } from 'react-router';
import TopHeader from './components/layout/TopHeader.jsx';
import SecondLevelHeader from './components/layout/SecondLevelHeader.jsx';
import AuthModals from './components/AuthModals.jsx';

export default function Layout() {
  const isLoggedIn = false;

  return (
    <div className="page">
      <TopHeader />

      <SecondLevelHeader />

      <div className="page-wrapper">
        {/*<div className="page-header d-print-none">
          <div className="container-xl">
            <div className="row g-2 align-items-center">
              <div className="col">
                <h2 className="page-title">
                  Empty page
                </h2>
              </div>
            </div>
          </div>
        </div>*/}

        <div className="page-body">
          <div className="container-xl">
            <Outlet />
          </div>
        </div>

        <footer className="footer footer-transparent d-print-none">
          <div className="container-xl">
            <div className="row text-center align-items-center flex-row-reverse">
              <div className="col-lg-auto ms-lg-auto">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item"><a href="https://tabler.io/docs" target="_blank" className="link-secondary" rel="noopener">Documentation</a></li>
                  <li className="list-inline-item"><a href="./license.html" className="link-secondary">License</a></li>
                </ul>
              </div>
              <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul className="list-inline list-inline-dots mb-0">
                  <li className="list-inline-item">
                    Copyright &copy; 2025
                    <a href="." className="link-secondary">NewsFeed</a>.
                    All rights reserved.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {
          ! isLoggedIn &&
          <AuthModals />
        }
      </div>
    </div>
  )
}