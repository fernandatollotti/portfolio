import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import AppRoutes from "./routes/routes";
import "./styles/global.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <main className="main">
          <AppRoutes/>
          <Menu/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App;
