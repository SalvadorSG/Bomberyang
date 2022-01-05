import { Actor, IActor } from "./Actor";

const level = [
	"WWWWWWWWWWWWWWWWWWWWWWWW",
	"W   WWVWWWW  V         W",
	"W   V     W  WWWWWWWVWWW",
    "WVWWWWWVWWW  W         W",
    "W W     WWWWVWWVWWWWWVWW",
    "W W     V       W      W",
    "W WWWWWWWWWVWWWWW      W",
    "W    V          WWWWWWVW",
    "WVWWWWWWWWWVWWWVWWVWWPPW",
    "W    V      WWW      PFW",
    "WWWWWWWWWWWWWWWWWWWWWWWW",

].map((f) => f.split(""));

export class Map extends Actor implements IActor {
	update() {}
	keyboard_event() {}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		let total_ratio = 642 / level.length;
		let spacing = total_ratio;
		let size = total_ratio;
		ctx.save();
		ctx.translate(0,0 );
		for (let x = 0; x < level.length; x++) {
			for (let y = 0; y < level[x].length; y++) {
				ctx.beginPath();

				if (level[x][y] == "W") {
                    ctx.fillStyle = 'brown';
					ctx.rect(y * spacing, x * spacing, size, size);
				}

				if (level[x][y] == "V") {
                    ctx.fillStyle = 'pink';
                    ctx.rect(y * spacing, x * spacing, size, size);
				}

                if (level[x][y] == "F") {
                    ctx.fillStyle = 'purple';
                    ctx.rect(y * spacing, x * spacing, size, size);
				}
                if (level[x][y] == "P") {
                    ctx.fillStyle = 'orange';
                    ctx.rect(y * spacing, x * spacing, size, size);
				}

				ctx.closePath();
				ctx.fill();
				ctx.stroke();
			}
		}
		ctx.restore();
	}
}