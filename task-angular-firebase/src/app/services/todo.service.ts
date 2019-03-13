import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, QueryFn, AngularFireAction, AngularFireDatabaseModule, snapshotChanges } from 'angularfire2/database';
import { TodoModel } from '../models/todo';
import { environment } from '../../environments/environment'
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<any>;
  listx: TodoModel[];
  selectedTask_temporally: TodoModel = new TodoModel();

  constructor(
    private firebasedb: AngularFireDatabase,
  ) {}

  getTodoListDate(){
    
    var f = firebase.firestore()
    //var app = firebase.initializeApp(environment.firebase)
    //var db = firebase.firestore(app)
    var col = f.collection('tasks')
    var query = col.where("completed", "==", false).orderBy('dateCreate').onSnapshot((
      snapshot: firebase.firestore.QuerySnapshot) =>{
      const list = [];
      snapshot.forEach(doc =>        
        list.push(Object.assign({},
          doc.data(),
          {
            id: doc.id,
          }))
      );
      this.listx = list;
    });
    console.log('__LISTX')
    console.log(this.listx)
    
  }

  getTodoList(){
    this.getTodoListDate()
    this.todoList = this.firebasedb.list('tasks');
    return this.todoList;
  }

  addTodo(data: TodoModel){
    this.todoList.push({
      title: data.title,
      description: data.description,
      status: false,
      creator: data.creator,
      dateCreate: data.dateCreate,
      modifier: null,
      dateModify: null
    })
  }

  updateTodo(data: TodoModel){
    this.todoList.update(data.$key, {
      title: data.title,
      description: data.description,
      status: data.status,
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
