import { Point } from "../types/Point";
import { Actor, IActor } from "./Actor";

export class Barrier extends Actor implements IActor {
   barrierSize: number
   constructor(initialPos:Point = {x:300, y:300}) {
      super(initialPos)
      this.barrierSize = 100;
   }

   update(delta:number){ 
   }

   draw(delta: number, ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.position.x, this.position.y, this.barrierSize, this.barrierSize);
   }
}