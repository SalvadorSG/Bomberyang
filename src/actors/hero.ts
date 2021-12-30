export class Hero {
   heroSize: number
   constructor() {
      this.heroSize = 20;
   }

   draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 100, 100);
   }
}