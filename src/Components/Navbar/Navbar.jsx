import { Link } from 'react-router-dom';
import './Navbar.css';
import Searchbar from '../SearchBar/Searchbar';



const Navbar=()=>{
   return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
    <div class="container-fluid">
      <Link class="navbar-brand logo" to="#">
      QUICKSHOPR</Link>
      <div class="d-flex mt-3 mt-lg-0 search-container" role="search">
            <Searchbar/>
        </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="offcanvas offcanvas-end text-bg-dark links" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title logo" id="offcanvasNavbar2Label">QUICKSHOPR</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button> 
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="#">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#">Link</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="#">Action</Link></li>
                <li><Link class="dropdown-item" to="#">Another action</Link></li>
                <li>
                  <hr class="dropdown-divider"/>
                </li>
                <li><Link class="dropdown-item" to="#">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
   )
}




export default Navbar