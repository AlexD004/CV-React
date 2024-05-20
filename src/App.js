import './styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Routes, Route, NavLink} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Footer from './assets/components/Footer';

function App() {

  // REALISATIONS
  const realisationsCards = [
    { 
      id: 1,
      imageURL: "/fresh-food.jpg",
      alt: "Panier de légumes frais",
      title: "Fresh Food",
      content: <>Réalisation d'un site avec commande en ligne.</>,
      buttonLink: "#Page-FreshFood",
      infoPlus: "Site réalisé avec PHP et MySQL"
    },
    { 
      id: 2,
      imageURL: "/restaurant-akira.jpg",
      alt: "Sushis et Makis",
      title: "Restaurant Akira",
      content: <>Réalisation d'un site vitrine.</>,
      buttonLink: "#Page-RestaurantAkira",
      infoPlus: "Site réalisé avec WordPress"
    },
    { 
      id: 3,
      imageURL: "/espace-bien-etre.jpg",
      alt: "Serviette et Huiles essentielles",
      title:"Espace bien-être",
      content: <>Réalisation d'un site vitrine pour un praticien de bien-être.</>,
      buttonLink: "#Page-BienEtre",
      infoPlus: "Site réalisé avec HTML et CSS"
    }
  ];

  // ARTICLES DE BLOG
  const blogCards = [
    { 
      id: 6,
      imageURL: "/coder.jpg",
      alt: "Code HTML sur un écran",
      title: "Coder son site en HTML/CSS",
      content: <>Some quick example text to build on the card title and make up the bulk of the card's content.</>,
      buttonLink: "#Article-06",
      infoPlus: "Publié le 22 août 2022"
    },
    { 
      id: 5,
      imageURL: "/e-commerce.png",
      alt: "Wireframe d'un site e-commerce sur un ordinateur illustré",
      title: "Vendre ses produits sur le web",
      content: <>Some quick example text to build on the card title and make up the bulk of the card's content.</>,
      buttonLink: "#Article-05",
      infoPlus: "Publié le 20 août 2022"
    },
    { 
      id: 4,
      imageURL: "/google.png",
      alt: "Illustration d'une page Google sur un ordinateur",
      title:"Se positionner sur Google",
      content: <>Some quick example text to build on the card title and make up the bulk of the card's content.</>,
      buttonLink: "#Article-04",
      infoPlus: "Publié le 1 août 2022"
    },
    { 
      id: 3,
      imageURL: "/responsive.png",
      alt: "Illustration d'un zoning sur quatre tailles d'écran",
      title:"Coder en responsive design",
      content: <>Some quick example text to build on the card title and make up the bulk of the card's content.</>,
      buttonLink: "#Article-03",
      infoPlus: "Publié le 31 juillet 2022"
    },
    { 
      id: 2,
      imageURL: "/seo.jpg",
      alt: "Lettres S E O répétées dans une perspective",
      title:"Techniques de référencement",
      content: <>Some quick example text to build on the card title and make up the bulk of the card's content.</>,
      buttonLink: "#Article-02",
      infoPlus: "Publié le 30 juillet 2022"
    },
    { 
      id: 1,
      imageURL: "/apprendre-code.png",
      alt: "",
      title:"Illustration de deux écrans, l'un avec du code et l'autre avec un wireframe",
      content: <>Some quick example text to build on the card title and make up the bulk of the card's content.</>,
      buttonLink: "#Article-01",
      infoPlus: "Publié le 12 juillet 2022"
    }
  ];

  return (
    <div className="App">
      <div className="Nav">
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
          <Container>
            <Navbar.Brand>
              <NavLink className="nav-link text-light text-uppercase" to="/"> John Doe </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                  <NavLink className="nav-link text-light text-uppercase" to="/"> Accueil </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/services"> Services </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/realisations"> Réalisations </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/blog"> Blog </NavLink>
                  <NavLink className="nav-link text-light text-uppercase" to="/contact"> Me contacter </NavLink>
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
          <Routes>
            <Route path="/" element={ <Accueil/> }></Route>
            <Route path="/services" element={ <Services/> }></Route>
            <Route path="/realisations" element={ <Realisations dataPortfolio={ realisationsCards }/> }></Route>
            <Route path="/blog" element={ <Blog dataBlog={ blogCards }/> }></Route>
            <Route path="/contact" element={ <Contact/> }></Route>
            <Route path="/mentions-legales" element={ <MentionsLegales/> }></Route>
          </Routes>
      </div>
      <Footer dataPortfolio={ realisationsCards } dataBlog={ blogCards } />
    </div>
  );
}

export default App;
