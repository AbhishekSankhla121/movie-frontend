import React from "react";
import { LiaStarSolid } from "react-icons/lia";
import { RiStarSLine } from "react-icons/ri";

interface StarProps {
  rating: number;
}

const Star: React.FC<StarProps> = ({ rating }) => {
  const stars = [];
  for (let index = 0; index < 5; index++) {
    stars.push(
      index < rating ? (
        <LiaStarSolid key={index} />
      ) : (
        <RiStarSLine key={index} />
      )
    );
  }

  return <>{stars}</>;
};

export default Star;
