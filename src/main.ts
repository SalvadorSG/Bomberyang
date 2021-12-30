import { Actor, IActor } from "./actors/Actor";
import { Hero } from "./actors/Hero";



window.onload = () => {
	var canvas = document.getElementById("canvas") as HTMLCanvasElement;
	var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

	let actor = new Hero();


	let actors: Array<IActor> = [actor];



	let lastFrame = 0;
	const render = (time: number) => {
		let delta = (time - lastFrame) / 1000;

		lastFrame = time;
		actors.forEach((e) => e.update(delta));
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		actors.forEach((e) => {

			e.draw(delta, ctx);

		});
		window.requestAnimationFrame(render);
	};

	window.requestAnimationFrame(render);

	document.body.addEventListener("keydown", (e) => {
		actors.forEach((actor) => {
			if (actor.keyboard_event_down) {
				actor.keyboard_event_down(e.key);
			}
		});
	});
	document.body.addEventListener("keyup", (e) => {
		actors.forEach((actor) => {
			if (actor.keyboard_event_up) {
				actor.keyboard_event_up(e.key);
			}
		});
	});
}



