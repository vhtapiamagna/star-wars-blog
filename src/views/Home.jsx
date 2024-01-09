import Header from '../components/Header';
import CardCharacter from '../components/CardCharacters';

const Home = () => {
    return (
      <>
        <Header />
        <div className="container my-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <CardCharacter />
          </div>
        </div>
      </>
    );
  };
  
  export default Home;