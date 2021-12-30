import { Hero } from "./actors/hero";

window.onload = () => {
	var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	let actor = new Hero();
	actor.draw(ctx);
}



