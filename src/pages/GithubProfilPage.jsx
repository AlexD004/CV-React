import GithubProfil from "../assets/components/GithubProfil";

function GithubProfilPage() {

    return (
      <div className="MentionsLegales">
        <header className="Header text-center">
          <div className='imageHeader fluid'></div>
          <div className='container d-flex flex-column justify-content-center align-items-center'>
            <h1 className='mt-5 text-uppercase'>
              Github user
            </h1>
            <div className='underTitle bg-primary rounded my-3 mb-5'>&nbsp;</div>
          </div>
        </header>
        <main className="text-center text-dark">
          <GithubProfil user="github-john-doe" />
        </main>
      </div>
    );
  }
  
  export default GithubProfilPage;