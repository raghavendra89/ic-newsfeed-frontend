export default function HomePlaceholder() {
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="card placeholder-glow">
            <div className="ratio ratio-4x3 card-img-top placeholder"></div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="row">
            {
              [0, 1, 2, 3].map((number) => (
                <div className="col-12 mb-2" key={number} >
                  <div className="card">
                    <div className="row g-0 align-items-center placeholder-glow">
                      <div className="col-3">
                        <div className="ratio ratio-1x1 card-img-start placeholder"></div>
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
              ))
            }
          </div>
        </div>

        <div className="col-md-3">
          <div className="row">
            {
              [0, 1, 2, 3].map((number) => (
                <div className="col-12 mb-2" key={number} >
                  <div className="card">
                    <div className="row g-0 align-items-center placeholder-glow">
                      <div className="col-3">
                        <div className="ratio ratio-1x1 card-img-start placeholder"></div>
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
              ))
            }
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-md-6">
          <div className="row">

            {
              [0, 1, 2].map((number) => (
                <div className="col-12" key={number}>
                  <div className="card">
                    <div className="row g-0 align-items-center placeholder-glow">
                      <div className="col-3">
                        <div className="ratio ratio-1x1 card-img-start placeholder"></div>
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
              ))
            }
          </div>
        </div>

        <div className="col-md-6">
          <div className="row">

            {
              [0, 1, 2].map((number) => (
                <div className="col-12" key={number} >
                  <div className="card">
                    <div className="row g-0 align-items-center placeholder-glow">
                      <div className="col-3">
                        <div className="ratio ratio-1x1 card-img-start placeholder"></div>
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
              ))
            }
          </div>
        </div>

      </div>
    </>
  );
}