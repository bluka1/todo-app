export class Todo {
  id = null;
  done = undefined;
  text = undefined;

  constructor(text) {
    this.text = text;
    this.done = false;
    this.id = Math.random().toFixed(7);
  }
}
