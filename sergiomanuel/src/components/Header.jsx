import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './ima/icono2.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
       <div >
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{background:'black'}}>
  <div className="container">
    
  <NavLink className="navbar-brand" to="/home"> 
      <img src={logo} alt="" width="45"  style={{marginRight:15}}className="d-inline-block align-text-top"/>
      <div style={{display:'inline-grid'}}><span style={{fontSize:24, lineHeight:1.2}}>Sergio Manuel</span> <span style={{fontSize:14, display:'block'}}>Frontend developer</span></div></NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='https://sergiomanuel.site/resume.pdf' target='_blank'>Resume</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</div> 



    </>
  )
}

export default Header
