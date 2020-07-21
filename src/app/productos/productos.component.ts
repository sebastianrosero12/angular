import { Component, OnInit } from '@angular/core';

import { Model, TodoItem } from "./model";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.less']
})
export class ProductosComponent implements OnInit {
  model = new Model();
  getName() {
    return this.model.user;
  }
  getItems(){
    return this.model.items.filter(item => !item.done);
    // return this.model.items;
  }
  addItem(newItem) {
    if (newItem != "") {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }
  ngOnInit(): void {
  }

}