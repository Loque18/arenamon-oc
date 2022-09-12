import "./app.scss";
import { Suspense } from "react";
// import { useEagerConnect } from "hooks/useEagerConnect";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
// import HomePage from "pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";
import { useEagerConnect } from "./hooks/useEagerConnect";

import routes from "virtual:generated-pages-react";

const RoutesWrapper = () => {
  const routing = useRoutes(routes);
  return routing;
};

function App() {
  useEagerConnect();
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <ParallaxProvider>
          <Toaster
            position="top-center"
            toastOptions={{
              success: { duration: 10000 },
              error: { duration: 10000 },
            }}
            containerStyle={{
              top: 150,
            }}
          />

          <RoutesWrapper />
          {/* 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
      
          </Routes>
        </Router> */}
        </ParallaxProvider>
      </Suspense>
    </Router>
  );
}

export default App;
