import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar(props) {


  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-purple px-5 py-3 sticky-top">
      <a class="navbar-brand" href="https://www.exerciseftui.com/home"><img src={process.env.PUBLIC_URL + '/exer.svg'} alt="logo"/></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link" onClick={props.handleBalik}>Home</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={props.handlePilihCurrency}>Currency</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={props.handlePilihSuhu}>Temperature</div>
          </li>
          <li class="nav-item">
            <div class="nav-link" onClick={props.handlePorto}>Profile</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
