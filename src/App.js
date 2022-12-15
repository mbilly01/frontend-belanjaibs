import logo from './logo.svg';
import './App.css';
import NavbarSection from './components/NavbarSection';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Questions from './components/Questions';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Subscribe from './components/Subscribe';
function App() {
  return (
    <div className="App">
     <NavbarSection/>
     <Hero/>
     <AboutUs/>
     <Products/>
     <Questions/>
     <Subscribe/>
     <Footer/>
    </div>
  );
}

export default App;
