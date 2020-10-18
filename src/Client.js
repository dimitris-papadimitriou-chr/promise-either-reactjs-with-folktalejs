export class Client {
  
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static get name() {
    return c => c.name;
  }
}
