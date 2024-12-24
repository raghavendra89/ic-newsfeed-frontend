import { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import TopHeader from './components/layout/TopHeader.jsx';
import SecondLevelHeader from './components/layout/SecondLevelHeader.jsx';
import AuthModals from './components/AuthModals.jsx';
import SearchResults from './components/SearchResults.jsx';
import useNews from '@/hooks/useNews.js';
import {UserContext} from '@/lib/UserContext.js';
import api from '@/lib/api.js';

export default function Layout() {
  const [news, fetchNews] = useNews();
  const [user, setUser] = useState(null);
  const isLoggedIn = false;
  const isSearching = false;

  useEffect(() => {
    api.get('user')
        .then(data => {
          setUser(data.data);
        }).finally(() => fetchNews())
  }, []);

  return (
    <UserContext.Provider value={user}>
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
              {
                isSearching
                ? <SearchResults />
                : <Outlet context={[news]} />
              }
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
    </UserContext.Provider>
  )
}