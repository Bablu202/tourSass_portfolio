import "./sass/main.scss";
import Header from "./react/Header";
import MainHome from "./react/MainHome";
import Features from "./react/Features";
import Tours from "./react/Tours";
import Stories from "./react/Stories";
import Booking from "./react/Booking";
import Footer from "./react/Footer";
function App() {
  return (
    <div className="app">
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
