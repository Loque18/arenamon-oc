import { useState } from "react";
import Expand from "react-expand-animated";
import "./faq.scss";
export default function Faq() {
  const faqData = [
    {
      quetion: "When is the mint date?",
      answer: ["The mint date will be on Sunday 4th of September."],
    },
    {
      quetion: "What is the mint time?",
      answer: [
        "5PM UTC for the whitelist, you will have 2 hours to mint.",
        "7PM UTC for the allow list, you will have 2 hours to mint.",
        "9PM UTC for the sign up list, you will have 6 hours to mint.",
        "3AM UTC (5th Sept) for the public sale.",
      ],
    },
    {
      quetion: "What is the mint price?",
      answer: [
        "Whitelist = 0.15 ETH",
        "Allow list = 0.17 ETH",
        "Sign up list = 0.19 ETH",
        "Public sale = 0.20 ETH",
      ],
    },
    {
      quetion: "How many NFTs can I mint?",
      answer: [
        "Whitelist = 5 NFTs Max.",
        "Allow list = 5 NFTs Max.",
        "Sign up list = no limit",
        "Public sale = no limit",
      ],
    },
    {
      quetion:
        "Where can I find the list of whitelisted and allowed-listed people?",
      answer: ["You may access it by visiting this page."],
    },
    {
      quetion: "When will be the reveal?",
      answer: [
        "You will immediately see your NFT right after minting. Reveal is instant.",
      ],
    },
    {
      quetion: "When is the NFT tournament starting?",
      answer: ["The NFT tournament will start on the 15th of September. "],
    },
    {
      quetion: "What are my chances to mint a legendary or shiny monster?",
      answer: [
        "We have 870 legendary monsters (8.7% chances) and 240 shinys (2.4% chances). You then have 11.1% chance of getting a special NFT.",
      ],
    },
    {
      quetion: "How can I create a Metamask wallet and add funds?",
      answer: [
        "You can check our tutorial over here: https://www.youtube.com/watch?v=onOm_0-idP8&t=4s",
      ],
    },
  ];
  const [faqId, setFaqId] = useState(-1);
  const handleClick = (id: number) => {
    if (faqId !== -1) {
      if (faqId === id) {
        setFaqId(-1);
      } else {
        setFaqId(id);
      }
    } else {
      setFaqId(id);
    }
  };
  const transitions = ["height", "opacity", "background"];
  return (
    <div className="faq">
      <div className="scroll" id="faq"></div>
      <div className="faqContent">
        <h1>FAQS</h1>
        <div className="faqWrapper">
          <div
            className={`line color1`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(0);
            }}
          >
            <div className="question">
              <h3 style={{ color: 0 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[0].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 0 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 0}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    The mint date will be on{" "}
                    <strong>Sunday 4th of September</strong>.
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color2`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(1);
            }}
          >
            <div className="question">
              <h3 style={{ color: 1 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[1].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 1 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 1}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    <strong>5PM UTC</strong> for the whitelist, you will have{" "}
                    <strong>2 </strong>
                    hours to mint.
                  </p>
                  <p className="answer">
                    <strong>7PM UTC</strong> for the allow list, you will have{" "}
                    <strong>2 </strong>
                    hours to mint.
                  </p>
                  <p className="answer">
                    <strong>9PM UTC</strong> for the sign up list, you will have
                    <strong> 6 </strong> hours to mint.
                  </p>
                  <p className="answer">
                    <strong>3AM UTC (5th Sept)</strong> for the public sale.
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color1`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(2);
            }}
          >
            <div className="question">
              <h3 style={{ color: 2 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[2].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 2 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 2}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    Whitelist = <strong> 0.15</strong> ETH
                  </p>
                  <p className="answer">
                    Allow list = <strong>0.17</strong> ETH
                  </p>
                  <p className="answer">
                    Sign up list = <strong>0.19</strong> ETH
                  </p>
                  <p className="answer">
                    Public sale = <strong>0.20</strong> ETH
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color2`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(3);
            }}
          >
            <div className="question">
              <h3 style={{ color: 3 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[3].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 3 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 3}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    Whitelist = <strong>5</strong> NFTs Max.
                  </p>
                  <p className="answer">
                    Allow list = <strong>5</strong> NFTs Max.
                  </p>
                  <p className="answer">
                    Sign up list = <strong>no limit</strong>
                  </p>
                  <p className="answer">
                    Public sale = <strong>no limit</strong>
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color1`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(4);
            }}
          >
            <div className="question">
              <h3 style={{ color: 4 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[4].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 4 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 4}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    You may access it by visiting this site (
                    <a
                      href="https://arenamon.com/search_wallet"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      https://arenamon.com/search_wallet
                    </a>
                    ) .
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color2`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(5);
            }}
          >
            <div className="question">
              <h3 style={{ color: 5 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[5].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 5 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 5}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    You will immediately see your NFT right after minting.
                    Reveal is instant.
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color1`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(6);
            }}
          >
            <div className="question">
              <h3 style={{ color: 6 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[6].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 6 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 6}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    The NFT tournament will start on the{" "}
                    <strong>15th of September.</strong>
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color2`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(7);
            }}
          >
            <div className="question">
              <h3 style={{ color: 7 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[7].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 7 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 7}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    We have <strong>870</strong> legendary monsters{" "}
                    <strong>(8.7% chances)</strong> and <strong>240</strong>{" "}
                    shinys <strong>(2.4% chances)</strong>. You then have{" "}
                    <strong>11.1%</strong> chance of getting a special NFT.
                  </p>
                </div>
              </span>
            </Expand>
          </div>

          <div
            className={`line color1`}
            data-aos="fade-right"
            onClick={() => {
              handleClick(8);
            }}
          >
            <div className="question">
              <h3 style={{ color: 8 === faqId ? `#aaa` : `#159dd9` }}>Q</h3>
              <p>{faqData[8].quetion}</p>
              <img
                src="assets/arrow.png"
                alt=""
                style={{
                  transform: 8 === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                }}
              />
            </div>
            <Expand
              open={faqId === 8}
              duration={300}
              // transitions={transitions}
            >
              <span>
                <h3>A</h3>
                <div>
                  <p className="answer">
                    You can check our tutorial over here:
                    <a
                      href="https://www.youtube.com/watch?v=onOm_0-idP8&t=4s"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      https://www.youtube.com/watch?v=onOm_0-idP8&t=4s
                    </a>
                  </p>
                </div>
              </span>
            </Expand>
          </div>
        </div>
      </div>
      <img src="assets/bg_03.png" alt="" className="bg" />
      <img src="assets/monster.png" alt="" className="monsters" />
    </div>
  );
}
