const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top mb-3">
      <div className="container">
        <a className="navbar-brand" href="#top">Connpass Hot Event</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#top">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/hiroto-toriyama/connpass-events"  target="_blank" rel="noopener noreferrer">About(GitHub)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;