import { NavLink } from "react-router";

export default function HomeCarousel({ news }) {
  return (
    <div id="home-carousel" className="carousel slide">
      <div className="carousel-indicators">

        {
          news?.map((article, index) => (
            <button
              type="button"
              data-bs-target="#home-carousel"
              data-bs-slide-to={index}
              className={(index == 0 ? 'active' : '')}
              aria-current="true"
              aria-label={article.title}
              key={index}></button>
          ))
        }
      </div>
      <div className="carousel-inner rounded">

        {
          news?.map((article, index) => (
            <div className={"carousel-item " + (index == 0 ? 'active' : '')} key={index}>
              <img src={ article.image } className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h2><NavLink to={"news/" + article.id}>{ article.title }</NavLink></h2>
                <p>{ article.summary }</p>
              </div>
            </div>
          ))
        }

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#home-carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#home-carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}