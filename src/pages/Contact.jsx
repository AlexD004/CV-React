import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot }  from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton }  from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';

function Contact() {

    return (
      <div className="Contact bg-primary">
        <div className="container position-relative py-5">
          <div className="bg-white p-3 mt-5 rounded">
            <header className="Header text-center">
              <div className='container d-flex flex-column justify-content-center align-items-center py-5'>
                <h1 className='text-uppercase'>
                  Me contacter
                </h1>
                <h2>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</h2>
                <div className='underTitle bg-primary rounded my-3 mb-5'>&nbsp;</div>
              </div>
            </header>
            <main className='fluid d-flex justify-content-center row mb-5'>
              <section className="container col-sm-12 col-md-6">
                <h3 className="border-bottom border-primary border-2 text-dark mb-4">Formulaire de contact</h3>
                <form className='d-flex justify-content-center align-item-center flex-column'>
                  <input type="text" name="name" placeholder="Votre nom" className='form-control mb-2'></input>
                  <input type="email" name="email" placeholder="Votre adresse email" className='form-control mb-2'></input>
                  <input type="tel" name="phone" placeholder="Votre numéro de téléphone" className='form-control mb-2'></input>
                  <input type="text" name="object" placeholder="Sujet" className='form-control mb-2'></input>
                  <textarea name="message" placeholder="Votre message" className='form-control'></textarea>
                  <div className='text-center'><Button className="mt-3 mw-50 btn btn-md">Envoyer</Button></div>
                </form>
              </section>
              <section className="container col-sm-12 col-md-6">
                <h3 className="border-bottom border-primary border-2 text-dark mb-4">Mes coordonnées</h3>
                <p className='m-0'><FontAwesomeIcon icon={faLocationDot} size="s"/> 40 Rue Laure Diebold, 69009 Lyon France</p>
                <p className='m-0'><FontAwesomeIcon icon={faMobileScreenButton} size="s"/> <a href="tel:0620304050" className="text-dark">06 20 30 40 50</a></p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541447!2d4.79640397736678!3d45.77866571240069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1716279064580!5m2!1sfr!2sfr" title="JohnDoeAddress" className="mt-2" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </section>
            </main>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;