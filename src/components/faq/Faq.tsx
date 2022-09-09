import { useState } from "react";
import Expand from "react-expand-animated";
import "./faq.scss";
export default function Faq() {
  const faqData = [
    // {
    //   quetion: "When is the mint date?",
    //   answer: ["The mint date will be on Sunday 4th of September."],
    // },
    // {
    //   quetion: "What is the mint time?",
    //   answer: [
    //     "5PM UTC for the whitelist, you will have 2 hours to mint.",
    //     "7PM UTC for the allow list, you will have 2 hours to mint.",
    //     "9PM UTC for the sign up list, you will have 6 hours to mint.",
    //     "3AM UTC (5th Sept) for the public sale.",
    //   ],
    // },
    // {
    //   quetion: "What is the mint price?",
    //   answer: [
    //     "Whitelist = 0.15 ETH",
    //     "Allow list = 0.17 ETH",
    //     "Sign up list = 0.19 ETH",
    //     "Public sale = 0.20 ETH",
    //   ],
    // },
    // {
    //   quetion: "How many NFTs can I mint?",
    //   answer: [
    //     "Whitelist = 5 NFTs Max.",
    //     "Allow list = 5 NFTs Max.",
    //     "Sign up list = no limit",
    //     "Public sale = no limit",
    //   ],
    // },
    // {
    //   quetion:
    //     "Where can I find the list of whitelisted and allowed-listed people?",
    //   answer: ["You may access it by visiting this page."],
    // },
    // asd
    {
      quetion: "When will be the reveal?",
      answer: [
        "You will immediately see your NFT right after minting. Reveal is instant.",
      ],
    },
    {
      quetion: "When is the NFT tournament starting?",
      answer: [
        "The tournament is recurring and will always start on the 15th of the month.",
      ],
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
        "Please watch the video above to understand how to get your NFT.",
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
          {faqData.map((item, index) => {
            return (
              <div
                className={`faqItem line color${(index % 2) + 1}`}
                key={index}
                data-aos="fade-right"
                onClick={() => {
                  handleClick(index);
                }}
              >
                <div className="question">
                  <h3 style={{ color: index === faqId ? `#aaa` : `#159dd9` }}>
                    Q
                  </h3>
                  <p>{item.quetion}</p>
                  <img
                    src="assets/arrow.png"
                    alt=""
                    style={{
                      transform:
                        index === faqId ? `rotate(180deg)` : `rotate(0deg)`,
                    }}
                  />
                </div>
                <Expand open={faqId === index} duration={300}>
                  <div className="faqAnswer">
                    <br />

                    {item.answer.map((answer, index2) => {
                      return <p key={index2}>{answer}</p>;
                    })}
                  </div>
                </Expand>
              </div>
            );
          })}
        </div>
      </div>
      <img src="assets/bg_03.png" alt="" className="bg" />
      <img src="assets/monster.png" alt="" className="monsters" />
    </div>
  );
}
