import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark sticky-top mb-3">
      <div className="container">
        <Scroll className="navbar-brand" to="top" offset={-60}>Connpass Hot Event</Scroll>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Scroll className="nav-link" to="top" offset={-60}>Home</Scroll>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/hiroto-toriyama/connpass-events"  target="_blank" rel="noopener noreferrer">About <small>(GitHub)</small></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;