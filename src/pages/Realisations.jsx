import CardsList from '../assets/components/CardsList'

function Realisations({ dataPortfolio }) {

    return (
      <div className="Realisations">
        <header className="Header text-center">
          <div className='imageHeader fluid'></div>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mt-5 text-uppercase'>
              Portfolio
            </h1>
            <h2>Voici quelques-unes de mes réalisations.</h2>
            <div className='underTitle bg-primary rounded my-3 mb-5'>&nbsp;</div>
          </div>
        </header>
        <main className='fluid d-flex justify-content-center mb-5'>
            <CardsList 
              dataCards={ dataPortfolio } 
              textAlign= "text-center" 
              gutterBetweenCards= "g-2" 
              col= "col-sm-12 col-md-6 col-lg-4" 
              cardStyle= "border border-secondary " 
              buttonStyle= "bg-white border border-primary text-primary my-3"
              buttonText= "Voir"
            />
        </main>
        
      </div>
    );
  }
  
  export default Realisations;