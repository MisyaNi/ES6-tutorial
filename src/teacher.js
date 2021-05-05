import { Ppl } from './ppl';

// export function promote() { }

export default class Teacher extends Ppl {

  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}