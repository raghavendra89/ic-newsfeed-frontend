import { useState, useEffect, useContext } from 'react';
import {NewsContext} from '@/lib/NewsContext.js';
import { Outlet, useLocation } from 'react-router';

export default function NewsSearch() {
  const location = useLocation();
  const [searchText, setSearchText] = useState('');
  const [
    news,
    preferedNews,
    preferencesEmpty,
    preferenceOptions,
    fetchNews,
    isSearching
  ] = useContext(NewsContext);

  useEffect(() => {
    if (! isSearching) {
      setSearchText('');
    }
  }, [isSearching])

  const searchNews = () => {
    if (! searchText) return;

    fetchNews(location.pathname, searchText);
  }

  return (
    <form action="./" method="get" autoComplete="off" noValidate>
      <div className="input-group input-icon news-seach">
        <span className="input-icon-addon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Search for… (Use comma separted keywords)"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => searchNews()}
          >Go!</button>
      </div>
    </form>
  );
}