import { Size } from "../types/Size";
import { Point } from "../types/Point";
import { checkLimits } from "../utils/checkLimits";
import { Actor, IActor } from "./Actor";

export class Hero extends Actor implements IActor {
  size: Size;
  speed: number;
  blocks: Array<any>;
  constructor(
    size: Size,
    initialPos: Point,
    blocks: any
  ) {
    super(initialPos);
    this.size = size;
    this.speed = 5;
    this.blocks = blocks;
  }

  collisionControler(position: Point) {
    for (let i = 0; i < this.blocks.length; i++) {
      let block = this.blocks[i];
      if (
        position.x > block.x + block.w ||
        position.x + this.size.w < block.x ||
        position.y > block.y + block.h ||
        position.y + this.size.h < block.y
      ) {
      } else return true;
    }
  }

  update(delta: number) {
    let newPos: Point = {
      x: this.position.x,
      y: this.position.y + this.speed,
    };
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.size.w, this.size.h);
  }

  keyboard_event_down(key: string) {
    if (key == "ArrowRight") {
       let position = {...this.position}
       position.x += this.speed
      if (!this.collisionControler(position)) {
        this.position.x += this.speed;
      }
    }

    if (key == "ArrowUp") {
      let position =  {...this.position}
      position.y -= this.speed
      if (!this.collisionControler(position)) {
        this.position.y -= this.speed;
      }
    }

    if (key == "ArrowLeft") {
      let position =  {...this.position}
      position.x -= this.speed
      if (!this.collisionControler(position)) {
        this.position.x -= this.speed;
      }
    }

    if (key == "ArrowDown") {
      let position =  {...this.position}
      position.y += this.speed
      if (!this.collisionControler(position)) {
        this.position.y += this.speed;
      }
    }
  }
}
