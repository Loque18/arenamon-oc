import "./app.scss";
// import { useEagerConnect } from "hooks/useEagerConnect";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HomePage from "pages/HomePage";
import { ParallaxProvider } from "react-scroll-parallax";
import { Toaster } from "react-hot-toast";
import { useEagerConnect } from "./hooks/useEagerConnect";
import HomePage from "./pages/HomePage";
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
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/mint" component={MintPage} /> */}
        </Switch>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
