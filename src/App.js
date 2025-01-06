import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/main/Main";
import ScrollToTopButton from "./scroll";



function App() {
  return (
   
    <div className="container">
    <Header/>
    <Hero id="hero"/>
    <div className="diveder"/>
    <Main id="main2"/>
    <div className="diveder"/>
    <Contact id="contact"/>
    <div className="diveder"/>
    <Footer/>
     {ScrollToTopButton()}
    </div>
  );
}

export default App;
