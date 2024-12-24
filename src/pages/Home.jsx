import FilterModal from '@/components/FilterModal.jsx';
import HomeCarousel from '@/components/HomeCarousel.jsx';
import ArticleCard from '@/components/ArticleCard.jsx';
import HomePlaceholder from '@/components/placeholders/HomePlaceholder.jsx';
import { NavLink, useOutletContext } from "react-router";

export default function Home(props) {
  const [news] = useOutletContext();

  if (! news.length) {
    return (
      <>
        <HomePlaceholder />
      </>
    );
  }

  return (
    <>
      <FilterModal />

      <div className="row mb-3">
        <div className="col-md-6 mb-3 mb-md-0">
          <HomeCarousel news={news.slice(0, 6)} />
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="row">
            {
              news.slice(6, 10)?.map((article, index) => (
                <div className="col-12 mb-2 card-link-col" key={index}>

                  <NavLink className="card card-link" href="/news/123">
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

                  <NavLink className="card card-link" href="/news/123">
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
                <div className="col-12">

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
                <div className="col-12">

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
