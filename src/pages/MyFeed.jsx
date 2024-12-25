import { useContext } from "react";
import PreferencesModal from '@/components/PreferencesModal.jsx';
import MyFeedPlaceholder from '@/components/placeholders/MyFeedPlaceholder.jsx';
import { NavLink } from "react-router";
import {NewsContext} from '@/lib/NewsContext.js';

export default function MyFeed() {
  const [
    news,
    preferedNews,
    preferencesEmpty
  ] = useContext(NewsContext);

  return (
    <>
      <div className="row mb-3">
        <div className="col-12 text-end">
          <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#perferences-modal">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-settings"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /></svg>

            Perferences
          </button>
        </div>
      </div>
      <PreferencesModal />

      {
        preferencesEmpty &&
        <div className="row mb-3">
          <div className="col-12 text-center">
            <h4>You have not set any preferences. Start by setting the perferences.</h4>
          </div>
        </div>
      }

      {
        ! preferedNews.length &&
        <MyFeedPlaceholder />
      }

      {
        preferedNews &&
        <PageContent news={preferedNews} />
      }
    </>
  );
}

function PageContent({news}) {
  return (
    <>
      <div className="row">
        {
          news.slice(0, 4)?.map((article, index) => (
            <div className="col-md-3 col-6 mb-3" key={index}>
              <div className="card img-card-news">
                <div className="img-responsive img-responsive-21x9 card-img-top">
                  <img src={ article.image } />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{ article.title?.substr(0, 36) }...</h3>
                  <p className="text-secondary">{ article.summary?.substr(0, 125) }...</p>
                </div>
              </div>
            </div>
          ))
        }

      </div>

      <div className="row mb-3">
        {
          news.slice(4, 30)?.map((article, index) => (
              <div className="col-md-6 mb-2" key={index}>

                <div className="card rounded-0 border-bottom-0">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <img src={article.image} className="rounded" />
                      </div>
                      <div className="col">
                        <span className="pointer float-end">
                          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24" className="icon icon-tabler icons-tabler-filled icon-tabler-heart text-red"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
                        </span>

                        <h3 className="card-title mb-1">
                          <NavLink to={ 'news/' } className="text-reset">{article.title?.substr(0, 110)}...</NavLink>
                        </h3>
                        <div className="text-secondary">
                          {article.summary}...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
          ))
        }

      </div>
    </>
  );
}