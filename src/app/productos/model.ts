export class Model {
    user;
    items;
    constructor() {
      this.user = "nombre";
      this.items = [
        new TodoItem("Frutas", false),
        new TodoItem("Verduras", true),
        new TodoItem("Granos", false),
        new TodoItem("Aseo", false)
      ];
    }
  }
  export class TodoItem {
    action;
    done;
    constructor(action, done) {
      this.action = action;
      this.done = done;
    }
  }