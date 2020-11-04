import Message from './Message';
export default class BlogPost {
  public id: number;
  public title: String;
  public subtitle: string;
  public content: string;
  public messages: Array<Message>;

  constructor(title: string, subtitle: string) {
    this.id = Math.random();
    this.title = title;
    this.subtitle = subtitle;
    this.content =
      'This guy is posting into ' +
      title +
      ' thinking that the subtitle ' +
      subtitle +
      ' is correct';
    this.messages = [
      new Message('Marcos Costa', 'Thanks for the awesome post' + title),
      new Message('Sunny V', 'That was great. It made my day'),
    ];
  }
}
