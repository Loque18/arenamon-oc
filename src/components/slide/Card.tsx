import React from "react";

interface dataType {
  img: string;
  name: string;
  desc: string;
}
interface Props {
  data: dataType;
}
export default function Card({ data }: Props) {
  return (
    <div className="card">
      <img src={data.img} alt="" className="avatar" />
      <div className="cardContent">
        <br />

        <h2>{data.name}</h2>
        <div className="stars">
          <img src="assets/star.png" alt="" />
          <img src="assets/star.png" alt="" />
          <img src="assets/star.png" alt="" />
          <img src="assets/star.png" alt="" />
          <img src="assets/star.png" alt="" />
        </div>
        <p>{data.desc}</p>
      </div>

      <img src="assets/team_bar.png" alt="" className="bar" />
    </div>
  );
}
