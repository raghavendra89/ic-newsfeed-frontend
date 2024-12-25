import { useState, useEffect } from "react";
import { useParams } from "react-router";
import api from "@/lib/api.js";

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  let params = useParams();

  useEffect(() => {
    api.get('news/' + params.newsId)
        .then(data => {
          setArticle(data.data);
        })
  }, [params.newsId]);

  if (Object.keys(article).length == 0) {
    return (
      <div className="row mb-3">
        <div className="col-md-10 offset-md-1">
          <div className="card placeholder-glow">
            <div className="ratio ratio-4x3 card-img-top placeholder"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-lg-10 col-xl-9">
        <div className="card">
          <div className="card-body">
            <div className="mb-2 text-end">
              <span className="badge bg-blue text-white badge-pill px-2 py-1">The Guardian</span>
            </div>

            <h1 className="text-center">{ article?.title }</h1>
            <p className="text-center my-2 fs-3">
              Author: { article?.author }
            </p>

            <p className="text-center text-secondary">
              { article?.summary }
            </p>

            <div>
              <figure className="text-center">
                <img src={ article?.image } className="d-block w-100" alt="..." />
                <figcaption>{ article?.title }</figcaption>
              </figure>
            </div>

            <div>
              <p>
                { article?.content }
              </p>

              <div class="card">
                <div class="card-status-start bg-primary"></div>
                <div class="card-body">
                  <h3 class="card-title mb-2">Link to original source:</h3>
                  <a href={ article?.url } target="_black">
                    { article?.url }
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}