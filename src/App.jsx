import { ThemeProvider } from './ThemeContext.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import TechStack from './components/TechStack.jsx';
import Work from './components/Work.jsx';
import Testimonial from './components/Testimonial.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import StarsCanvas from './components/Stars.jsx';

function App() {
  return (
    <ThemeProvider>
      <div className="relative w-screen h-screen z-10">
        <Home />
        <StarsCanvas />
      </div>
      <div className="relative z-0 body">
        <Navbar />
        <About />
        <TechStack />
        <Service />
        <Work />
        <div className="relative mt-24 pb-28"><Testimonial /></div>
        <div className="contact mb-80"><Contact /></div>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
