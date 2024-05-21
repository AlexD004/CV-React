import Accordion from 'react-bootstrap/Accordion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot }  from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton }  from '@fortawesome/free-solid-svg-icons'
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons'

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
                  <h3 >John Doe</h3>
                  <p className='m-0'><FontAwesomeIcon icon={faLocationDot} size="sm"/> 40 Rue Laure Diebold,<br></br>69009 Lyon France</p>
                  <p className='m-0'><FontAwesomeIcon icon={faMobileScreenButton} size="sm"/> <a href="tel:0620304050">06 20 30 40 50</a></p>
                  <p className='m-0'><FontAwesomeIcon icon={faEnvelope} size="sm"/> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </main>
      </div>
    );
  }
  
  export default MentionsLegales;