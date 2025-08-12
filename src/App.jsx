import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Heander from "./component/header";
import Footer from "./component/Footer";
import PixDonation from "./component/PixDonation";

function App() {
  return (
    <div>
      <Heander />
      <PixDonation />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App
