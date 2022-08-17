import { BrowserRouter, Route, Router } from "react-router-dom";
import "./App.scss";
import Header from "../src/components/header/Header";
import Footer from "./components/footer/Footer";
import Routes from "./config/Routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            render={(props) => (
              <>
                <Header {...props} />
                <Routes />
                <Footer />
              </>
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
