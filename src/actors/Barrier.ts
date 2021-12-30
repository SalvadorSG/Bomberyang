import { Point } from "../types/Point";
import { Actor, IActor } from "./Actor";

export class Barrier extends Actor implements IActor {
   barrierSize: number
   constructor(initialPos:Point = {x:300, y:300}) {
      super(initialPos)
      this.barrierSize = 100;
   }

   draw(delta: number, ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.position.x, this.position.y, this.barrierSize, this.barrierSize);
   }

   update(delta:number){
       
   }

   /*keyboard_event_down(key:string){
      if(key == "ArrowRight"){
         this.position.x +=5
      }
      
      if(key == "ArrowUp"){
         this.position.y -=5
      }

      if(key == "ArrowLeft"){
         this.position.x -=5
      }

      if(key == "ArrowDown"){
         this.position.y +=5
      }
   }*/

}