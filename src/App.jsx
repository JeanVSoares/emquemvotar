import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Heander from "./component/header";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Heander />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App
