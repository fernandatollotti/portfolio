import Header from "./components/Header/Header";
import About from "./pages/About/About";
import "./styles/global.css"

function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <main className="main">
          <About/>
        </main>
      </div>
    </>
  )
}

export default App;
