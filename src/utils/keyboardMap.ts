export enum HeroKey {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export interface KeyboardMap {
  [key: string]: HeroKey;
}

export let MAP_A = {
  ArrowUp: HeroKey.UP,
  ArrowDown: HeroKey.DOWN,
  ArrowLeft: HeroKey.LEFT,
  ArrowRight: HeroKey.RIGHT,
};
