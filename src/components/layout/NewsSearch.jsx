export default function NewsSearch() {
  return (
    <form action="./" method="get" autoComplete="off" noValidate>
      <div className="input-group input-icon news-seach">
        <span className="input-icon-addon">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </span>
        <input type="text" className="form-control" placeholder="Search for…" />
        <button className="btn btn-primary" type="button">Go!</button>
      </div>
    </form>
  );
}