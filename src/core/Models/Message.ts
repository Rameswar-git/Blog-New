export default class Message {
  public author: string;
  public message: string;
  constructor(auth: string, msg: string) {
    this.author = auth;
    this.message = msg;
  }
}
