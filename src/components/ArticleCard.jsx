import { NavLink } from "react-router";

export default function ArticleCard({ article }) {
  return (
    <div className="card rounded-0 border-bottom-0">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-3">
            <img src={ article.image } alt={article.title} className="rounded" />
          </div>
          <div className="col">
            <h3 className="card-title mb-1">
              <NavLink to={"news/" + article.id} className="text-reset">
                { article.title.substr(0, 60) }...
              </NavLink>
            </h3>
            <div className="text-secondary">
              { 
                article.summary
                ? article.summary.substr(0, 130)
                : article.title.substr(0, 130)
              }...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}