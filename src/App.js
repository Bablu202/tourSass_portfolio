import "./sass/main.scss";
import Header from "./react/Header";
import MainHome from "./react/MainHome";
import Features from "./react/Features";
import Tours from "./react/Tours";
import Stories from "./react/Stories";
import Booking from "./react/Booking";
import Footer from "./react/Footer";
import NavElement from "./react/elements/NavElement";
import SectionTest from "./react/SectionTest";
function App() {
  return (
    <div className="app">
      <NavElement />
      <Header />
      <MainHome />
      <Features />
      <Tours />
      <Stories />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
//      <SectionTest />
