import Slide from "../../components/slide/Slide";
import "./testimonials.scss";
export default function Testimonials() {
  const testimonialsData = [
    {
      img: "assets/B6yL6SL.png",
      name: "The Ape List",
      desc: 'We are proud to announce our whitelist collaboration with the alpha group called "The Ape List". The Ape List is a private group of 1600+ Bored Ape Yacht Club and Mutant Ape Yacht Club holders which are ranked 2nd and 3rd biggest NFT collections in the world.',
    },
    {
      img: "assets/5DnCEfL.png",
      name: "The Hoot List",
      desc: 'We are proud to announce our whitelist collaboration with the alpha group called "The Hoot List". The Hoot List is a private group of 1200+ verified Moonbirds which is ranked the 9th biggest NFT collection in the world. We also did a partnership with another group called "Moonbirds Dynasty" which is a large community of Chinese holders.',
    },
    {
      img: "assets/mctxT6a.png",
      name: "Doodles Official",
      desc: 'We are proud to announce our whitelist collaboration with the official collection "Doodles". Doodles is the 11th biggest NFT collection in the world and we are super happy to welcome them to the Arenamon tournament.',
    },
    // {
    //   img: "assets/VsOcAhT.png",
    //   name: "NeoTokyo Citizens",
    //   desc: 'We are proud to announce our whitelist collaboration with the official collection "NeoTokyo Citizens". NeoTokyo Citizens is a collection of 2000 holders with a solid floor price of 5 ETH. We are grateful for their presence and activity in our Discord server. One of their member called "Speedwagon" won our first BETA Tournament.',
    // },
    {
      img: "assets/LbL7oYM.png",
      name: "Premint Collector Pass",
      desc: 'We are proud to announce our whitelist collaboration with the official collection "Premint Collector Pass". More than 3000+ pass holders connected their wallets on our Premint page to win a whitelist from Arenamon.',
    },
  ];

  return (
    <div className="testimonials">
      <div className="scroll" id="testimonials"></div>
      <div className="testimonialsContent">
        <h1>WAGMI</h1>
        <div className="warpper">
          <Slide data={testimonialsData} />
        </div>
      </div>
      <img src="assets/bg_02.png" alt="" className="bg" />
      <img src="assets/mouse.png" alt="" className="mouse" />
    </div>
  );
}
