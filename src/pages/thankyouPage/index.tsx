// import Footer from 'components/footer/Footer';
// import Loading from 'components/loading/Loading';
// import Topbar from 'components/topbar/Topbar';
// import { useEagerConnect } from 'hooks/useEagerConnect';
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import Home from "../../components/home/Home";
import Loading from "../../components/loading/Loading";
import Testimonials from "../../components/testimonials/Testimonials";
import Topbar from "../../components/topbar/Topbar";
import { useEagerConnect } from "../../hooks/useEagerConnect";
// import Home from 'components/home/Home';
// import Testimonials from 'components/testimonials/Testimonials';
// import Faq from 'components/faq/Faq';

import "./style.scss";

export default function HomePage() {
  useEagerConnect();

  const openNewWindow = () => {
    window.open("https://opensea.io/collection/arenamon", "_blank");
  };

  return (
    <>
      <div className="page">
        <Topbar />
        <div
          className="bg-container"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "150vh",
            overflow: "hidden",
          }}
        >
          <img src="assets/bg_01.png" alt="" className="bg" />
        </div>
        <div className="home" style={{ minHeight: "100vh" }}>
          <div className="homeContent">
            <div className="warpper">
              <div className="warapa" style={{ display: "hidden" }}>
                <h2 className="has-txt-orange">Thank you for your purchase!</h2>
                <br />
                <h1 className="has-txt-white">You have successfully minted</h1>
                <h1 className="has-txt-white">your Arenamon NFT !</h1>
                <br />
                <div className="centere">
                  {" "}
                  <div className="videoContent">
                    <iframe
                      src="https://player.vimeo.com/video/746302587?h=74c2930db6&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      width="1916"
                      height="1080"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="how-to-mint.mp4"
                    ></iframe>

                    <img src="assets/video_bar_02.png" className="bar" alt="" />
                    <img
                      src="assets/video_mark.png"
                      alt=""
                      className="topMark"
                    />
                  </div>
                </div>
                <br /> <br />
                <div>
                  <button className="button-nobtn" onClick={openNewWindow}>
                    Check it on opensea{" "}
                    <span className="icon">
                      <i className="fa-solid fa-up-right-from-square" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
