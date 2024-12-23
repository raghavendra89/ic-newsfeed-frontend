export default function SingleArticle() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10 col-xl-9">
        <div className="card">
          <div className="card-body">
            <div className="mb-2 text-end">
              <span className="badge bg-blue text-white badge-pill px-2 py-1">The Guardian</span>
            </div>

            <h1 className="text-center">Arsenal is getting closer to the first trophy since 20 years.</h1>
            <p className="text-center my-2 fs-3">
              Author: John Doe
            </p>

            <p className="text-center text-secondary">
              This is a long text for the description. It shows the snippet of the news article. This is a long text for the description. It shows the snippet of the news article...
            </p>

            <div>
              <figure className="text-center">
                <img src="https://picsum.photos/500/300" className="d-block w-100" alt="..." />
                <figcaption>Arsenal team playing...</figcaption>
              </figure>
            </div>

            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>

              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>

              <div class="card">
                <div class="card-status-start bg-primary"></div>
                <div class="card-body">
                  <h3 class="card-title mb-2">Link to original source:</h3>
                  <a href="https://www.theguardian.com/football/2024/dec/21/crystal-palace-arsenal-premier-league-match-report" target="_black">
                    https://www.theguardian.com/football/2024/dec/21/crystal-palace-arsenal-premier-league-match-report
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