import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
  }

  addTodo(itemTitle){
    //this._todoService.addTodo(itemTitle);
    console.log('Agregando....')
  }

}
