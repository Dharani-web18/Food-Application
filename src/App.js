
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import FormSection from './components/FormSection'; 
import Footer from './components/Footer'; 


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero /> 
      <FormSection /> 
      <Footer /> 
    </div>
  );
}

export default App;
