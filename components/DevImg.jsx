import Image from "next/image";
import React from "react";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Mohamed Img"></Image>
    </div>
  );
};

export default DevImg;
