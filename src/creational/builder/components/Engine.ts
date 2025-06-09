export default class Engine {
  constructor(private _horsepower: number) {}

  get horsepower(): number {
    return this._horsepower;
  }

  set horsepower(value: number) {
    this._horsepower = value;
  }
}
