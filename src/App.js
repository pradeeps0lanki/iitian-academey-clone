import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import "./App.css";
import Login from "./Components/Login/Login";
import HomePage from "./Components/Home/HomePage";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Login/Register";
import CourseDetailPage from "./Components/Courses/CourseDetailPage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course" element={<CourseDetailPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
