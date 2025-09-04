import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./component/Footer";
import PixDonation from "./component/PixDonation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App
