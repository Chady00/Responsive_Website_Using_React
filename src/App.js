//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Home from './home';
import "./home.css";
import Footer from './footer';
import "./footer.css";
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Home />
      </div>
      {/* <div className="App"> */}
      <Footer />
    </div>
    // </div>
  );
}


export default App;
