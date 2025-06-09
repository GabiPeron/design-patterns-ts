export default class Wheel {
  constructor(private _size: number) {}

  get size(): number {
    return this._size;
  }

  set size(value: number) {
    this._size = value;
  }
}
