import { NavButtonTypes } from "../kit";

export const generateColor = (type: NavButtonTypes) => {
  switch (type) {
    case NavButtonTypes.voting:
      return "#B4B7FF";
    case NavButtonTypes.breeds:
      return "#97EAB9";
    case NavButtonTypes.gallery:
      return "#FFD280";
    default:
      return "#B4B7FF";
  }
};
