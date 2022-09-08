// import Footer from 'components/footer/Footer';
// import Loading from 'components/loading/Loading';
// import Topbar from 'components/topbar/Topbar';
// import { useEagerConnect } from 'hooks/useEagerConnect';
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Loading from "../components/loading/Loading";
import Testimonials from "../components/testimonials/Testimonials";
import Topbar from "../components/topbar/Topbar";
import { useEagerConnect } from "../hooks/useEagerConnect";
// import Home from 'components/home/Home';
// import Testimonials from 'components/testimonials/Testimonials';
// import Faq from 'components/faq/Faq';
export default function HomePage() {
  useEagerConnect();

  return (
    <>
      <div className="page">
        <Topbar />

        <div className="" style={{ height: "100vh" }}>
          <div className="container" style={{ height: "100%" }}>
            <div>Thank you!</div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
