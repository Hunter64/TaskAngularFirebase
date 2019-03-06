import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoModel } from 'src/app/models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoModel[]
  todo: TodoModel
  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this.getTodo();
    //this.addTodo(this.todo);
    //this.editTodo(this.todo)
  }

  getTodo(){
    this._todoService.getTodoList()
    .snapshotChanges()
    .subscribe(item => {
      this.todoList = [];
      item.forEach(e =>{
        var x = e.payload.toJSON();
        x['$key'] = e.key;
        this.todoList.push(x as TodoModel)
      })
      console.log(this.todoList)
    })
  }

  addTodo(todo: TodoModel){
    this.todo = {
      title: 'Todo Title 2',
      description: 'Todo description 2',
      isCheked: false,
      creator: 'Hunter',
      dateCreate: new Date(),
      modifier: null,
      dateModify: null,
    }
    this._todoService.addTodo(this.todo);
  }

  editTodo(todo: TodoModel){
    //this._todoService.selectedTask_temporally = Object.assign({}, todo);
    this.todo = {
      $key: '-L_GH-ZcIljKupg7Fl2p',
      title: 'X',
      description: 'description-x',
      isCheked: false,
      creator: 'Hunter',
      dateCreate: new Date(),
      modifier: 'Hunter',
      dateModify: new Date()
    }
    this._todoService.updateTodo(this.todo)
    
}

}
