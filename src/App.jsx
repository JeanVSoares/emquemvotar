import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./component/Footer";
import Header from "./component/header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App
