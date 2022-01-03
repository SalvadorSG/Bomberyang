import { Point } from "../types/Point";

export const checkLimits = (position: Point) => {
    if(
        position.x < 1400 &&
        position.x > 0 &&
        position.y < 660 &&
        position.y > 0
    ) {
        return true
    }
    return false
}