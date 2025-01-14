import { Routes, Route } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import UnauthenticatedLayout from "@/layouts/UnauthenticatedLayout";
import ContactScreen from "./screens/ContactScreen";
import FAQScreen from "./screens/FAQScreen";
import AboutScreen from "./screens/AboutScreen";
import SignupScreen from "./screens/SignupScreen";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import AppHomeScreen from "./screens/AppHomeScreen";

const SiteRoutes = () => {
  return (
    <Routes>
      <Route element={<UnauthenticatedLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/faq" element={<FAQScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Route>
      <Route element={<AuthenticatedLayout />}>
        <Route path="/app/home" element={<AppHomeScreen />} />
      </Route>
    </Routes>
  );
};

export default SiteRoutes;
