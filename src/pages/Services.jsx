import CardsList from '../assets/components/CardsList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay }  from '@fortawesome/free-solid-svg-icons'
import { faFileCode }  from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlassDollar }  from '@fortawesome/free-solid-svg-icons'

function Services() {

    // STATE
    const serviceCards = [
      { 
        id: 1,
        icon: <FontAwesomeIcon icon={faDisplay} size="3x"/>,
        imageURL: "/requin.jpg",
        title: "UX Design",
        content: <>L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</>,
        buttonLink: "#",
        infoPlus: "Test my component"
      },
      { 
        id: 2,
        icon: <FontAwesomeIcon icon={faFileCode} size="3x"/>,
        imageURL: "/requin.jpg",
        title: "Développement Web",
        content: <>Le <strong>développement de sites web</strong> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</>,
        buttonLink: "#"
      },
      { 
        id: 3,
        icon: <FontAwesomeIcon icon={faMagnifyingGlassDollar} size="3x"/>,
        imageURL: "/requin.jpg",
        title: "Référencement",
        content: <>Le <strong>référencement naturel d'un site</strong>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.</>,
        buttonLink: "#"
      }
    ];

    // RENDER
    return (
      <div className="App text-center">
        <header className="Header">
          <div className='imageHeader fluid'></div>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mt-5 text-uppercase'>
              Mon offre de services
            </h1>
            <h2>Voici les prestations sur lesquelles je peux intervenir.</h2>
            <div className='underTitle bg-primary rounded my-3 mb-5'>&nbsp;</div>
          </div>
        </header>
        <main className='fluid d-flex justify-content-center'>

          <CardsList 
            dataCards={ serviceCards } 
            containerClass={ "container d-flex justify-content-center align-items-center" }
            gutterBetweenCards={ "g-2" }
            col={ "col-sm-12 col-md-4" }
            buttonStyle= "bg-primary my-3"
            buttonText= "Lire la suite"
          />

        </main>
        
      </div>
    );
  }
  
  export default Services;