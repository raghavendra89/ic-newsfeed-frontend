export default function SearchResults() {
  return (
    <>
      <div className="row">
         <div className="col-12">
           <h4 className="mb-2">Found 12 articles...</h4>
         </div>

        {
          [0, 1, 2, 3, 4].map(number => (
            <div className="col-12">
              <a className="card card-link mb-2 pointer" href="#">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-3 col-md-2">
                      <img src={"https://picsum.photos/id/2"+ number +"/300/200"} className="rounded" />
                    </div>
                    <div className="col">
                      <span className="pointer float-end">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24" className="icon icon-tabler icons-tabler-filled icon-tabler-heart text-red"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
                      </span>

                      <h3 className="card-title mb-1">
                        Arsenal is getting closer to the first trophy since 20 years.
                      </h3>
                      <div className="text-secondary">
                        This is a long text for the description. It shows the snippet of the news article. This is a long text for the description. It shows the snippet of the news article...
                      </div>

                      <div className="text-end">
                        <span className="badge bg-blue text-white badge-pill px-2 py-1">The Guardian</span>
                      </div>

                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))
        }

      </div>
    </>
  );
}