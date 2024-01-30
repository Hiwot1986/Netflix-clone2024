import Rows from './Components/Rows'
// import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner'
import RowList from './Components/Rows';




function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Rows/>
      <RowList/>
      <Footer />
    </div>
  );
}

export default App;
