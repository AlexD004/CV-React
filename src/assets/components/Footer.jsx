import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub }  from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter }  from '@fortawesome/free-brands-svg-icons'
import { faLinkedin }  from '@fortawesome/free-brands-svg-icons'
import { faChevronRight }  from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import { NavLink, Link } from 'react-router-dom';


function Footer({ dataPortfolio, dataBlog }) {
    return (
      <div className="Footer fluid d-flex flex-column justify-content-center align-items-center bg-darker position-relative">
        <div className="row container g-4 my-5">
            <div className="col-sm-12 col-md-6 col-lg-3 my-md-1 m-lg-0">
                <p className='mt-1 mb-1'><strong>John Doe</strong></p>
                <p className='m-0'>40 Rue Laure Diebold</p>
                <p className='m-0'>69009 Lyon, France</p>
                <p className='m-0'>Téléphone: <a href='tel:0620304050' className='text-dark'>06 20 30 40 50</a></p>
                <div className='mt-2 mb-0'>
                <div className='d-inline-block mx-1'><FontAwesomeIcon className='iconSocial' icon={faGithub} size="xl"/></div>
                <div className='d-inline-block mx-1'><FontAwesomeIcon className='iconSocial' icon={faSquareTwitter} size="xl"/></div>
                <div className='d-inline-block mx-1'><FontAwesomeIcon className='iconSocial' icon={faLinkedin} size="xl"/></div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-md-1 m-lg-0">
                <p className='mt-1 mb-1'><strong>Liens utiles</strong></p>
                <Nav className='text-left d-inline m-0 p-0'>
                  <NavLink className="nav-link text-dark m-0 p-0" to="/"> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/> Accueil </NavLink>
                  <NavLink className="nav-link text-dark m-0 p-0" to="/services"> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/>  Services </NavLink>
                  <NavLink className="nav-link text-dark m-0 p-0" to="/realisations"> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/>  Réalisations </NavLink>
                  <NavLink className="nav-link text-dark m-0 p-0" to="/blog"> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/>  Blog </NavLink>
                  <NavLink className="nav-link text-dark m-0 p-0" to="/contact"> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/>  Me contacter </NavLink>
                  <NavLink className="nav-link text-dark m-0 p-0" to="/mentions-legales"> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/>  Mentions légales </NavLink>
              </Nav>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-md-1 m-lg-0">
                <p className='mt-1 mb-1'><strong>Mes dernières réalisatons</strong></p>
                <Nav className='text-left d-inline m-0 p-0'>
                {dataPortfolio.slice(0, 3).map(
                    (dataPortfolio) => {
                        return (
                          <Link key={dataPortfolio.id} className="nav-link text-dark m-0 p-0" to={dataPortfolio.buttonLink}> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/> {dataPortfolio.title} </Link>
                        )
                    }
                )}
                </Nav>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 my-md-1 m-lg-0">
                <p className='mt-1 mb-1'><strong>Mes dernièrs articles</strong></p>
                <Nav className='text-left d-inline m-0 p-0'>
                {dataBlog.slice(0, 3).map(
                    (dataBlog) => {
                        return (
                          <Link key={dataBlog.id} className="nav-link text-dark m-0 p-0" to={dataBlog.buttonLink}> <FontAwesomeIcon icon={faChevronRight} className='text-primary' size="xs"/> {dataBlog.title} </Link> 
                        )
                    }
                )}
                </Nav>
            </div>
        </div>
        <div className='container-fluid bg-dark text-light text-center py-2'>
            © Designed by John Doe
        </div>
      </div>
    );
  }
  
  export default Footer;