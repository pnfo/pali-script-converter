export default class Obj1 {
  constructor() {
    this.n = 'Obj1'
  }

  get name() {
    return this.n
  }

  static get oneThird() {
    return 1.0 / 3.0
  }
}
