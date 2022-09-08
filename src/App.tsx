import "./app.scss";
// import { useEagerConnect } from "hooks/useEagerConnect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";
import { useEagerConnect } from "./hooks/useEagerConnect";
import HomePage from "./pages/HomePage";
import ThankYouPage from "./pages/thankyouPage";
function App() {
  useEagerConnect();
  return (
    <ParallaxProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thankyou" element={<ThankYouPage />} />
          {/* <Route exact path="/mint" component={MintPage} /> */}
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
