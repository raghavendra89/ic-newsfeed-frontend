import FilterModal from '../components/FilterModal.jsx';
import HomePlaceholder from '../components/placeholders/HomePlaceholder.jsx';

export default function Home() {

  if (false) {
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
          {/*Carousel*/}
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded">

              <div className="carousel-item active">
                <img src="https://picsum.photos/300/200" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>First slide label</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://picsum.photos/300/200" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Second slide label</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>

              <div className="carousel-item">
                <img src="https://picsum.photos/300/200" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h2>Third slide label</h2>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/*Carousel*/}
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="row">
            {
              [0, 1, 2, 3].map((number) => (
                <div className="col-12 mb-2 card-link-col">

                  <a className="card card-link" href="/news/123">
                    <div className="card-body">
                      <div className="row">
                        <div className="col col-auto col-img">
                          <img src={"https://picsum.photos/id/9"+ number +"/300/240"} alt="Food Deliver UI dashboards" className="rounded" />
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">Maryjo Lebarree</div>
                          <div className="text-secondary">Civil Engineer</div>
                        </div>
                      </div>
                    </div>
                  </a>

                </div>
              ))
            }

          </div>
        </div>

        <div className="col-md-3 col-sm-6">
          <div className="row">
            {
              [0, 1, 2, 3].map((number) => (
                <div className="col-12 mb-2 card-link-col">

                  <a className="card card-link" href="#">
                    <div className="card-body">
                      <div className="row">
                        <div className="col col-auto col-img">
                          <img src={"https://picsum.photos/id/1"+ number +"/300/240"} alt="Food Deliver UI dashboards" className="rounded" />
                        </div>
                        <div className="col">
                          <div className="font-weight-medium">Maryjo Lebarree</div>
                          <div className="text-secondary">Civil Engineer</div>
                        </div>
                      </div>
                    </div>
                  </a>

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
              [0, 1, 2, 3, 4, 5, 6, 7].map((number) => (
                <div className="col-12">

                  <div className="card rounded-0 border-bottom-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <img src={"https://picsum.photos/id/5"+ number +"/300/200"} alt="Food Deliver UI dashboards" className="rounded" />
                        </div>
                        <div className="col">
                          <span className="pointer float-end">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                          </span>

                          <h3 className="card-title mb-1">
                            <a href="#" className="text-reset">Arsenal is getting closer to the first trophy since 20 years.</a>
                          </h3>
                          <div className="text-secondary">
                            This is a long text for the description. It shows the snippet of the news article...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }

          </div>
        </div>

        <div className="col-md-6">
          <div className="row">

            {
              [0, 1, 2, 3, 4, 5, 6, 7].map((number) => (
                <div className="col-12">

                  <div className="card rounded-0 border-bottom-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <img src={"https://picsum.photos/id/7"+ number +"/300/200"} alt="Food Deliver UI dashboards" className="rounded" />
                        </div>
                        <div className="col">
                          <span className="pointer float-end">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24" className="icon icon-tabler icons-tabler-filled icon-tabler-heart text-red"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
                          </span>

                          <h3 className="card-title mb-1">
                            <a href="#" className="text-reset">Arsenal is getting closer to the first trophy since 20 years.</a>
                          </h3>
                          <div className="text-secondary">
                            This is a long text for the description. It shows the snippet of the news article...
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            }

          </div>
        </div>

      </div>

    </>
  )
}
