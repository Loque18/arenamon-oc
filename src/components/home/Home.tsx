import ConnectModal from "../../components/connectModal/ConnectModal";
import Mint from "../../components/mint/Mint";
import { useState } from "react";
import "./home.scss";
// type LoadingType = {
//     setIsLoading ? (flag:boolean):void;
// };

import useFetchVideos from "../../hooks/useFetchVideos";

export default function Home() {
  // {setIsLoading}:LoadingType
  // const [imgCount, setImgCount] = useState(0)
  // useEffect(() => {
  //     if(imgCount === 7){
  //         setTimeout(() => {
  //             setIsLoading(false)
  //         }, 500);
  //     }
  // }, [imgCount, setIsLoading]);
  // const onLoad =()=>{
  //     setImgCount(imgCount + 1)
  // }
  // const [isPlaying, setIsPlaying] = useState(false)
  // const onPlay = ()=>{
  //     setIsPlaying(!isPlaying)
  //     if (!isPlaying){
  //         videoRef.current.play()
  //     }else{
  //         videoRef.current.pause()
  //     }

  // }
  const [showConnectModal, setShowConnectModal] = useState(false);

  const { data } = useFetchVideos();

  return (
    <>
      <div className="home">
        <div className="homeContent">
          <div className="warpper">
            <div className="left">
              <h2>Get your NFT to enter</h2>
              <h1>
                <span>the most exciting</span>
              </h1>
              <h1>tournament</h1>
              <h1>ever created</h1>
              <div className="videoContent">
                {/* <iframe
                  src="https://player.vimeo.com/video/699346284?h=2cb60d3215&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  width="1920"
                  height="1080"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen={true}
                  title="pubnft30_Final"
                ></iframe> */}
                <iframe
                  src={data[0].url}
                  width="1916"
                  height="1080"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="how-to-mint.mp4"
                  className="is-hidden-mobile"
                ></iframe>
                <iframe
                  src={data[1].url}
                  width="1916"
                  height="1080"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="how-to-mint.mp4"
                  className="is-hidden-desktop"
                ></iframe>
                {/* <video 
                                className="videoEmbed" 
                                onPlay={()=>{setIsPlaying(true)}} 
                                autoPlay={true} loop muted={false} 
                                // controls = {false}
                                controls
                                ref={videoRef} 
                            >
                                <source src="https://vimeo.com/699346284" type="video/mp4"/>
                            </video> */}
                {/* <button className="playBtn" onClick={onPlay}><i className="fas fa-play"></i></button> */}
                <img src="assets/video_bar_02.png" className="bar" alt="" />
                <img src="assets/video_mark.png" alt="" className="topMark" />
              </div>
            </div>
            <div className="right">
              <Mint onModalShow={setShowConnectModal} />
            </div>
          </div>
        </div>
        <img src="assets/bg_01.png" alt="" className="bg" />
      </div>
      <ConnectModal
        showConnectModal={showConnectModal}
        setShowConnectModal={setShowConnectModal}
      />
    </>
  );
}
