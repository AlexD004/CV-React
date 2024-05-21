import Accordion from 'react-bootstrap/Accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton, faEnvelope, faGlobe }  from '@fortawesome/free-solid-svg-icons'

function MentionsLegales() {

    return (
      <div className="MentionsLegales">
        <header className="Header text-center">
          <div className='imageHeader fluid'></div>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mt-5 text-uppercase'>
              Mentions Légales
            </h1>
            <div className='underTitle bg-primary rounded my-3 mb-5'>&nbsp;</div>
          </div>
        </header>
        <main className='fluid d-flex justify-content-center mb-5'>
          <div className='container'>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Éditeur du site</Accordion.Header>
                <Accordion.Body>
                  <h3>John Doe</h3>
                  <p className='m-0'><FontAwesomeIcon icon={faLocationDot} size="sm"/> 40 Rue Laure Diebold,<br></br>69009 Lyon France</p>
                  <p className='m-0'><FontAwesomeIcon icon={faMobileScreenButton} size="sm"/> <a href="tel:0620304050">06 20 30 40 50</a></p>
                  <p className='m-0'><FontAwesomeIcon icon={faEnvelope} size="sm"/> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Hébergeur</Accordion.Header>
                <Accordion.Body>
                  <h3>O2 Switch</h3>
                  <p className='m-0'>222-224 Boulevard Gustave Flaubert<br></br>63000 Clermont-Ferrand – France</p>
                  <p className='m-0 mt-3'><FontAwesomeIcon icon={faGlobe} size="sm"/> <a href="https://www.o2switch.fr/">www.o2switch.fr</a></p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Hébergeur</Accordion.Header>
                <Accordion.Body>
                  <h3>Crédits</h3>
                  <p className='m-0'>Site développé par Alexandre Dupré, étudiant du CEF.</p>
                  <p className='m-0'>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/">Pixabay</a></p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </main>
      </div>
    );
  }
  
  export default MentionsLegales;