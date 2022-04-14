import React from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import Feedbackstats from "./components/Feedbackstats";
import Feedbackform from "./components/Feedbackform";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Linker from "./pages/Linker";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Header text="Feedback-App" bgColor="#ff5e57" color="#4834d4" />{" "}
        </Link>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <div className="container">
                    <Feedbackform />
                    <Feedbackstats />
                    <FeedbackList />
                    <Linker />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/*"
              element={
                <h1>
                  {" "}
                  <Link to="/" style={{ textDecoration: "none",color:"#fff" }}>
                    {" "}
                    Error Page $404<br />
                    Go to Home Page
                  </Link>
                </h1>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
