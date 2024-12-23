export default function MyFeed() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-3">
          <div className="card">
            <div className="img-responsive img-responsive-21x9 card-img-top">
              <img src="https://picsum.photos/id/27/300/200" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Card with top image</h3>
              <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="img-responsive img-responsive-21x9 card-img-top">
              <img src="https://picsum.photos/id/45/300/200" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Card with top image</h3>
              <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="img-responsive img-responsive-21x9 card-img-top">
              <img src="https://picsum.photos/id/54/300/200" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Card with top image</h3>
              <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="img-responsive img-responsive-21x9 card-img-top">
              <img src="https://picsum.photos/id/72/300/200" />
            </div>
            <div className="card-body">
              <h3 className="card-title">Card with top image</h3>
              <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima
                neque pariatur perferendis sed suscipit velit vitae voluptatem.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <div className="row">
                <div className="col-12 mb-2">

                  <div className="card rounded-0 border-bottom-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <img src={"https://picsum.photos/id/2"+ number +"/300/200"} className="rounded" />
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
              </div>
            ))
          }
        </div>

        <div className="col-md-6">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <div className="row">
                <div className="col-12 mb-2">

                  <div className="card rounded-0 border-bottom-0">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-3">
                          <img src={"https://picsum.photos/id/4"+ number +"/300/200"} alt="Food Deliver UI dashboards" className="rounded" />
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
              </div>
            ))
          }
        </div>
       </div>
    </>
  );
}