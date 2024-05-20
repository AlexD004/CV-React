import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Accueil() {

    // STATES
    const [progressBars] = useState([
      { id: 1, nom: "html5", grade: "90", color: "danger" },
      { id: 2, nom: "css3", grade: "80", color: "info" },
      { id: 3, nom: "javascript", grade: "70", color: "warning" },
      { id: 4, nom: "php", grade: "60", color: "success" },
      { id: 5, nom: "react", grade: "50", color: "primary" }
    ]);


    // RENDER
    return (
      <div className="Accueil">
        <header className="Accueil-header">
          <div className='headerContent'>
            <h1> Bonjour, je suis John Doe </h1>
            <h2 className='mt-4 mb-2'> Développeur web full stack </h2>
            <Button href="#aPropos">En savoir plus</Button>
          </div>

        </header>
        <main>
          <section id="aPropos" className='container-fluid-sm container-md d-flex justify-content-center my-5 py-5 rounded'>
            <div className='container row'>
                <div id="presentation" className='col-sm-12 col-md-6'>
                  <h3 className='border-bottom border-primary border-2 pb-2 mb-4'>À propos</h3>
                  <p>
                    Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.
                  </p>
                  <p>
                    Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
                  </p>
                  <p>
                    J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.
                  </p>
                </div>
                <div id="competences" className='col-sm-12 col-md-6'>
                  <img src={ require("../assets/images/john-doe.jpg") } alt="John Doe, développeur web" className='img-fluid' ></img>
                  <h4 className='my-3'>Mes compétences</h4>
                  <ul>
                    {progressBars.map(
                      (progressBar) => {
                        return (
                          <li key={progressBar.id} className='mb-2'>
                            <label className='text-uppercase'>{progressBar.nom} {progressBar.grade}%</label>
                            <ProgressBar variant={progressBar.color} now={progressBar.grade} />
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
            </div>
          </section>
        </main>
        
      </div>
    );
  }
  
  export default Accueil;