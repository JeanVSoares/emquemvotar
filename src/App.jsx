import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./component/Footer";
import PixDonation from "./component/PixDonation";
import Nav from "./component/Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App
