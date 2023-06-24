import React from "react";
// components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import MySkillPage from "./pages/MySkillPage";
import WorkPage from "./pages/WorkPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/skills" element={<MySkillPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
