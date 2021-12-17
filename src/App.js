import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MainContext from "./components/MainContext/MainContext";
import Navbar from "./components/Navbar/Navbar";
import QueryTable from "./UI/QueryTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <MainContext />
      <QueryTable/>
      <Footer />
    </div>
  );
}

export default App;
