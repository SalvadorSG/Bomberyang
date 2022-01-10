import { Point } from "../types/Point";
export const checkLimits = (position: Point) => {
  if (position.x > 1150) {
    return "right";
  }
  if (position.x < 0) {
    return "left";
  }
  if (position.y > 500) {
    return "bottom";
  }
  if (position.y < 0) {
    return "top";
  }
};
