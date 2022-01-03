import { Point } from "../types/Point";
export const checkLimits = (position: Point) => {
	if (
		position.x < 1300 &&
		position.x > 0 &&
		position.y < 550 &&
		position.y > 0
	) 
        return true;
	
        console.log("border")
        return false;
    

};