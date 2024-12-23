export default function PreferenceOptions(props) {
  return (
    <>
      <h4 className="mb-2">Selected { props.name }:</h4>
      <div className="mb-3 p-2 border border-1 rounded">
        <span className="tag bg-blue text-white mx-1">The Guardian<a href="#" className="btn-close"></a></span>
        <span className="tag bg-blue text-white mx-1">New York Times<a href="#" className="btn-close"></a></span>
        <span className="tag bg-blue text-white mx-1">Sky News<a href="#" className="btn-close"></a></span>
      </div>

      <div className="mb-3">
        <input className="form-control" placeholder="Search here..." />
      </div>

      <div>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
            <label className="form-check d-inline-block mx-1">
              <input className="form-check-input" type="checkbox" />
              <span className="form-check-label">The Guardian</span>
            </label>
          ))
        }
      </div>
    </>
  );
}