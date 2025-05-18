import { BrowserRouter, Route, Routes } from "react-router";
import "./App.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import LearnPage from "./pages/LearnPage/LearnPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}
