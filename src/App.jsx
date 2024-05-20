import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
   <Services/>
    <Tours/>
    <Footer/>
    
    <script src="./js/app.js"></script>
  
    </>
  );
};

export default App;
