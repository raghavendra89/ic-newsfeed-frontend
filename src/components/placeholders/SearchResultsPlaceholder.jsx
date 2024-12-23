export default function SearchResultsPlaceholder() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-3">
          &nbsp;
        </div>
      </div>

      <div className="row">

        <div className="col-12">
          {
            [0, 1, 2].map((number) => (
              <div className="row">
                <div className="col-12">
                  <div className="card mb-2">
                    <div className="row g-0 align-items-center placeholder-glow">
                      <div className="col-3">
                        <div className="ratio ratio-16x9 card-img-start placeholder"></div>
                      </div>
                      <div className="col">
                        <div className="card-body">
                          <div className="placeholder col-9 mb-2"></div>
                          <div className="placeholder placeholder-xs col-10"></div>
                          <div className="placeholder placeholder-xs col-11"></div>
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