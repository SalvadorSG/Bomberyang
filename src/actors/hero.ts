
import { Point } from "../types/Point";
import { Actor, IActor } from "./Actor";

export class Hero extends Actor implements IActor {
   heroSize: number
   constructor(initialPos:Point = {x:50, y:50}) {
      super(initialPos)
      this.heroSize = 100;
   }

   draw(delta: number, ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'green';
      ctx.fillRect(this.position.x, this.position.y, this.heroSize, this.heroSize);
   }

   update(delta:number){
       
   }

   keyboard_event_down(key:string){
      if(key == "ArrowRight"){
         this.position.x +=10
      }
      
      if(key == "ArrowUp"){
         this.position.y -=10
      }

      if(key == "ArrowLeft"){
         this.position.x -=10
      }

      if(key == "ArrowDown"){
         this.position.y +=10
      }
   }

}