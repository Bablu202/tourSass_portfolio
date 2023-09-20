import "./Style.css";
import logoWhite from "./img/logo-white.png";

function App() {
  const Discover = (e) => {
    e.preventDefault();
    console.log("discover button");
  };
  return (
    <div className="header">
      <div className="logo-box">
        <img src={logoWhite} alt="logoW" className="logo" />
        Logo
      </div>
      <div className="heading-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">climb-Up</span>
          <span className="heading-primary-sub">is where life Happnes</span>
        </h1>
        <a href="" className="btn btn-white btn-anim" onClick={Discover}>
          discover our tours
        </a>
      </div>
    </div>
  );
}

export default App;
