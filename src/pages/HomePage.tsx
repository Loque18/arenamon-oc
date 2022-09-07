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
  const [isLoading, setIsLoading] = useState(true);

  AOS.init();
  window.onload = () => {
    setIsLoading(false);
    setTimeout(() => {
      AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
        initClassName: "aos-init", // class applied after initialization
        animatedClassName: "aos-animate", // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      });
    }, 500);
  };

  return (
    <>
      <div className="page">
        <Loading isLoading={isLoading} />

        <div
          className={`${isLoading ? "sections" : "sections activeSectioin"}`}
        >
          <Topbar />
          <Home />
          <Testimonials />
          <Faq />
          <Footer />
        </div>
      </div>
    </>
  );
}
