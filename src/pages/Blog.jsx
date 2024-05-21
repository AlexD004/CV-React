import CardsList from '../assets/components/CardsList'

function Blog({ dataBlog }) {

    return (
      <div className="Blog">
        <header className="Header text-center">
          <div className='imageHeader fluid'></div>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mt-5 text-uppercase'>
              Blog
            </h1>
            <h2>Retrouvez ici quelques articles sur le développement web.</h2>
            <div className='underTitle bg-primary rounded my-3 mb-5'>&nbsp;</div>
          </div>
        </header>
        <main className='fluid d-flex justify-content-center mb-5'>
            <CardsList 
              dataCards={ dataBlog } 
              textAlign= "text-center" 
              gutterBetweenCards= "g-2" 
              col= "col-sm-12 col-md-6 col-lg-4" 
              cardStyle= "border border-secondary " 
              buttonStyle= "bg-primary my-3"
              buttonText= "Lire la suite"
            />
        </main>
        
      </div>
    );
  }
  
  export default Blog;