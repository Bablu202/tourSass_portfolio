import "./sass/main.scss";
import Header from "./react/Header";
import MainHome from "./react/MainHome";
import Features from "./react/Features";
import Tours from "./react/Tours";
import Stories from "./react/Stories";
function App() {
  return (
    <div className="app">
      <Header />
      <MainHome />
      <Features />
      <Tours />
      <Stories />
    </div>
  );
}

export default App;
