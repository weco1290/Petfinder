import { useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import Form from "./Form";
import "./Cats.css";
function Cats() {
  const cat = [
    {
      name: "Mia",
      pic: "./Mia.png",
      description:
        "Mia loves to perch on a shoulder. She's very energetic and likes to play with the other kittens.",
      age: "13 weeks",
      sex: "Female",
      adopted: false,
    },
    {
      name: "Monty",
      pic: "/Monty2.png",
      description:
        "Monty is a sweet and slightly reserved fellow with a polite demeanor. This handsome fellow would be delighted to make your acquaintance.",
      age: "22 weeks",
      sex: "Male",
      adopted: false,
    },
    {
      name: "Suki",
      pic: "./Suki.png",
      description:
        "Suki is a very social girl. She loves to be pet and will roll on her back. She's clever and friendly to everyone.",
      age: "22 weeks",
      sex: "Female",
      adopted: true,
    },
    {
      name: "Salsa",
      pic: "./Salsa.png",
      description:
        "Salsa is a shy little guy looking for a patient family to help him build his confidence. He is learning the joys of petting and getting treats.",
      age: "19 weeks",
      sex: "Male",
      adopted: false,
    },
    {
      name: "Willow",
      pic: "./Willow.jpg",
      description:
        "Willow is a clever and playful girl. She’s got an independent streak and is happy to self-entertain, but she also enjoys people and being pet.",
      age: "21 weeks",
      sex: "Female",
      adopted: false,
    },
    {
      name: "Kuazi",
      pic: "./Kuazi2.png",
      description:
        "Kuazi is a dainty and sweet little cat who is growing in confidence every day. She enjoys playing with a wand toy.",
      age: "1 Year",
      sex: "Female",
      adopted: false,
    },
  ];

  const cards = cat.map((item) => {
    return (
      <Card
        className="card"
        title={item.name}
        pic={item.pic}
        alt={item.name}
        text={item.description}
        age={item.age}
        sex={item.sex}
        key={item.name}
        adopted={item.adopted}
      />
    );
  });

  return <div id="container">{cards}</div>;
}

export default Cats;
