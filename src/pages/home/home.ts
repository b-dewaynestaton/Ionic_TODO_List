import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id: number;
  todos: string[] = [];
  todo: string;
  key: string = 'todo';

  constructor(public navCtrl: NavController,
    private storage: Storage) {

    }
  saveData() {
    this.storage.set(this.key, this.todo);
  }

  loadData() {
    this.storage.get(this.key).then((val) => {
      this.todos.push(val);
    });
  }

  add() {
    this.todos.push(this.todo);
    this.todo = "";
  }

  delete(item) {
    let index = this.todos.indexOf(item, 0);
    if(index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
