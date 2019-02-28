import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { TodoModel } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<any>;

  constructor(
    private firebasedb: AngularFireDatabase
  ) { }

  getTodoList(){
    this.todoList = this.firebasedb.list('titles');
    return this.todoList;
  }

  addTodo(data: TodoModel){
    this.todoList.push({
      title: data.title,
      description: data.description,
      isCheked: false,
      creator: data.creator,
      dateCreate: data.dateCreate,
      modifier: null,
      dateModify: null
    })
  }

  updateTodo(data: TodoModel){
    this.todoList.update(data.key, {
      title: data.title,
      description: data.description,
      isCheked: data.isCheked,
      creator: data.creator,
      dateCreate: data.dateCreate,
      modifier: data.modifier,
      dateModify: data.dateModify
    });
  }

  deleteTodo($key: string){
    this.todoList.remove($key)
  }

}
