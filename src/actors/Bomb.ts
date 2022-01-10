import { Point } from "../types/Point";
import { Actor, IActor } from "./Actor";

export class Bomb extends Actor implements IActor {
  bombSize: number;
  constructor(initialPos: Point = { x: 300, y: 300 }) {
    super(initialPos);
    this.bombSize = 25;
  }

  update(delta: number) {}
}

