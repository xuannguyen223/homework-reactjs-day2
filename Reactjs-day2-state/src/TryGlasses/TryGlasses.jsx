import React, { useState } from "react";

const DATA = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

const TryGlasses = () => {
  const [image, setImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemDetail, setItemDetail] = useState("");

  const handleChangeGlasses = (id) => {
    let image = `./glassesImage/v${id}.png`;

    setImage(image);
    setItemName(DATA[id - 1].name);
    setItemDetail(DATA[id - 1].desc);
  };

  const renderListGlasses = () => {
    return (
      <>
        {DATA.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              handleChangeGlasses(item.id);
            }}
          >
            <img src={`./glassesImage/g${item.id}.jpg`} alt="" />
          </button>
        ))}
      </>
    );
  };

  return (
    <>
      <header>TRY GLASSES APP ONLINE</header>
      <main className="bg">
        <div className="model">
          <img
            src="./glassesImage/model.jpg"
            alt="model"
            className="relative"
          />
          <img src={image} alt="" className="item" />
          <div className="detail_item">
            <h2>{itemName}</h2>
            <p>{itemDetail}</p>
          </div>
        </div>
        <div className="glasses">{renderListGlasses()}</div>
      </main>
    </>
  );
};

export default TryGlasses;
