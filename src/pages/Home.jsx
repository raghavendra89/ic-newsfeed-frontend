import { useContext } from "react";
import HomeCarousel from '@/components/HomeCarousel.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import HomePlaceholder from '@/components/placeholders/HomePlaceholder.jsx';
import { NavLink } from "react-router";
import {NewsContext} from '@/lib/NewsContext.js';

export default function Home(props) {
  const [news] = useContext(NewsContext);

  if (news === null) {
    return (
      <>
        <HomePlaceholder />
      </>
    );
  }

  if (! news.length) {
    return (
      <div className="row mb-2">
        <div className="col-md-10 offset-md-1 text-center">
          <h3>There are no news articles. You can login as admin user and pull the articles or run this artisan command in the console: <br /> <code>php artisan news:pull --source=SOURCE_OPTION</code></h3>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-md-6 mb-3 mb-md-0">
          <HomeCarousel news={news.slice(0, 6)} />
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="row">
            {
              news.slice(6, 10)?.map((article, index) => (
                <div className="col-12 mb-2 card-link-col" key={index}>

                  <NavLink className="card card-link" to={"/news/" + article.id}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col col-auto col-img">
                          <img src={ article.image } alt={ article.title } className="rounded ratio ratio-1x1" />
                        </div>
                        <div className="col">
                          <div className="card-link-title font-weight-medium">{ article.title }</div>
                          <div className="card-link-desc text-secondary">{ article.summary }</div>
                        </div>
                      </div>
                    </div>
                  </NavLink>

                </div>
              ))
            }

          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="row">
            {
              news.slice(10, 14)?.map((article, index) => (
                <div className="col-12 mb-2 card-link-col" key={index}>

                  <NavLink className="card card-link" to={"/news/" + article.id}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col col-auto col-img">
                          <img src={ article.image } alt={ article.title } className="rounded ratio ratio-1x1" />
                        </div>
                        <div className="col">
                          <div className="card-link-title font-weight-medium">{ article.title }</div>
                          <div className="card-link-desc text-secondary">{ article.summary }</div>
                        </div>
                      </div>
                    </div>
                  </NavLink>

                </div>
              ))
            }

          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-md-6">
          <div className="row">

            {
              news.slice(14, 22)?.map((article, index) => (
                <div className="col-12" key={index}>

                  <ArticleCard article={article} key={index} />

                </div>
              ))
            }

          </div>
        </div>

        <div className="col-md-6">
          <div className="row">

            {
              news.slice(22, 30)?.map((article, index) => (
                <div className="col-12" key={index}>

                  <ArticleCard article={article} key={index} />

                </div>
              ))
            }

          </div>
        </div>

      </div>

    </>
  )
}
