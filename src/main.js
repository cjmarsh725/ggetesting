import { config } from "./config";
import { renderer } from "./renderer";

const _width = new WeakMap();

export class Sprite {
  constructor() {
    _width.set(this, 5);
  }
  set width(val) {_width.set(this, val)}
  get width() {return _width.get(this)}
}
