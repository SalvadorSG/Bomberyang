 import { point } from "../types/point";

 export interface IntActor {
	position: point;
	update: (delta: number) => void;
	keyboard_event_down?: (key: string) => void;
	keyboard_event_up?: (key: string) => void;
	draw: (delta: number, ctx: CanvasRenderingContext2D) => void;
}

export class Actor implements IntActor {
	position: point;
	constructor(position: point) {
		this.position = position;
	}
	update(delta: number) {}
	draw(delta: number, ctx: CanvasRenderingContext2D) {}
	keyboard_event(key: string) {}
 }