import { Actor, IntActor } from "./actor";

export class Hero extends Actor implements IntActor{
   heroSize: number
   constructor() {
      super()
      this.heroSize = 20;
   }

   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 100, 100);
   }
}