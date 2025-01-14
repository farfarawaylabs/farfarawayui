import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./App.css";
import { setNavigator } from "./lib/navigationHelpers";
import SiteRoutes from "./demo/SiteRoutes";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return <SiteRoutes />;
}

export default App;
