import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="bg-neutral-200">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </div>
  );
}

export default App
