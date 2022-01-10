import { Size } from "../types/Size";
import { Point } from "../types/Point";
import { checkLimits } from "../utils/checkLimits";
import { Actor, IActor } from "./Actor";

const Sprite = require("../../public/img/characters/Hero.png");

export class Hero extends Actor implements IActor {
  sprite: HTMLImageElement;
  size: Size;
  speed: number;
  blocks: Array<any>;
  constructor(size: Size, initialPos: Point, blocks: any) {
    super(initialPos);
    this.size = size;
    this.speed = 12;
    this.blocks = blocks;
    this.sprite = new Image();
    this.sprite.src = Sprite;
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
  }

  draw(delta: number, ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.sprite,
      15,
      140,
      35,
      55,
      this.position.x,
      this.position.y,
      40,
      50
    );
  }

  keyboard_event_down(key: string) {
    if (key == "ArrowRight") {
      let position = { ...this.position };
      position.x += this.speed;
      if (!this.collisionControler(position)) {
        this.position.x += this.speed;
      }
    }

    if (key == "ArrowUp") {
      let position = { ...this.position };
      position.y -= this.speed;
      if (!this.collisionControler(position)) {
        this.position.y -= this.speed;
      }
    }

    if (key == "ArrowLeft") {
      let position = { ...this.position };
      position.x -= this.speed;
      if (!this.collisionControler(position)) {
        this.position.x -= this.speed;
      }
    }

    if (key == "ArrowDown") {
      let position = { ...this.position };
      position.y += this.speed;
      if (!this.collisionControler(position)) {
        this.position.y += this.speed;
      }
    }
  }
}
