export default class Social {
  works: string;
  lives: string;
  birthday: Date;
  from: string;
  constructor(wrk: string, liv: string, bir: Date, frm: string) {
    this.works = wrk;
    this.lives = liv;
    this.birthday = bir;
    this.from = frm;
  }
}
