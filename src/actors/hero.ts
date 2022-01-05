import { Size } from "../types/Size";
import { Point } from "../types/Point";
import { checkLimits } from "../utils/checkLimits";
import { Actor, IActor } from "./Actor";

export class Hero extends Actor implements IActor {
   heroSize: Size;
   heroSpeed: number;
   constructor(size : Size = {w : 100, h : 100}, initialPos : Point = {x : 50, y : 50}) {
      super(initialPos);
      this.heroSize = size;
      this.heroSpeed = 0
   }

   update(delta:number){
      let newPos : Point = {
         x: this.position.x -= this.heroSpeed,
         y: this.position.y -= this.heroSpeed
      }
      if(checkLimits(newPos)){
         this.position = newPos;
      }
  }

   draw(delta: number, ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'green';
      ctx.fillRect(this.position.x, this.position.y, this.heroSize.w, this.heroSize.h);
   }



   keyboard_event_down(key:string){
      if(key == "ArrowRight"){
         this.position.x +=20
      }
      
      if(key == "ArrowUp"){
         this.position.y -=20
      }

      if(key == "ArrowLeft"){
         this.position.x -=20
      }

      if(key == "ArrowDown"){
         this.position.y +=20
      }
   }
}