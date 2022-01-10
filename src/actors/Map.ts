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
  unitaryHeight = 550 / level.length;
  unitaryWidth = 1200 / level[0].length;
  blocks: Array<any> = [];
  constructor() {
    super({ x: 0, y: 0 });
    this.blockGenerator();
  }
  blockGenerator() {
    for (let x = 0; x < level.length; x++) {
      for (let y = 0; y < level[x].length; y++) {
        if (level[x][y] == "W") {
          this.blocks.push({
            x: y * this.unitaryHeight,
            y: x * this.unitaryWidth,
            w: this.unitaryHeight,
            h: this.unitaryWidth,
          });
        }
      }
    }
  }
  update() {}
  keyboard_event() {}
  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(0, 0);
    for (let x = 0; x < level.length; x++) {
      for (let y = 0; y < level[x].length; y++) {
        ctx.beginPath();

        if (level[x][y] == "W") {
          ctx.fillStyle = "green";
          ctx.rect(
            y * this.unitaryHeight,
            x * this.unitaryWidth,
            this.unitaryHeight,
            this.unitaryWidth
          );
        }

        if (level[x][y] == "V") {
          ctx.fillStyle = "white";
          ctx.rect(
            y * this.unitaryHeight,
            x * this.unitaryWidth,
            this.unitaryHeight,
            this.unitaryWidth
          );
        }

        if (level[x][y] == "F") {
          ctx.fillStyle = "purple";
          ctx.rect(
            y * this.unitaryHeight,
            x * this.unitaryWidth,
            this.unitaryHeight,
            this.unitaryWidth
          );
        }
        if (level[x][y] == "P") {
          ctx.fillStyle = "orange";
          ctx.rect(
            y * this.unitaryHeight,
            x * this.unitaryWidth,
            this.unitaryHeight,
            this.unitaryWidth
          );
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    ctx.restore();
  }
}
