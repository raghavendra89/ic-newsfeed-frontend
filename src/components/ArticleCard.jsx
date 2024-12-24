export default function ArticleCard({ article }) {
  return (
    <div className="card rounded-0 border-bottom-0">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-3">
            <img src={ article.image } alt="Food Deliver UI dashboards" className="rounded" />
          </div>
          <div className="col">
            <span className="pointer float-end">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
            </span>

            <h3 className="card-title mb-1">
              <a href="#" className="text-reset">
                { article.title.substr(0, 60) }...
              </a>
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