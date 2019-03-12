import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoModel } from 'src/app/models/todo';
import { MatDialog } from '@angular/material';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';
import { AccessoriesService } from 'src/app/services/accessories.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoModel[]
  todo: TodoModel

  color = 'accent';
  checked = false;
  disabled = false;

  constructor(
    private _todoService: TodoService,
    private _accesoriesService: AccessoriesService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getTodo();
    //this.addTodo(this.todo);
    //this.editTodo(this.todo)
  }

  getTodo(){
    this._accesoriesService.showLoading();
    this._todoService.getTodoList()
    .snapshotChanges()
    .subscribe(item => {
      this.todoList = [];
      item.forEach(e =>{
        var x = e.payload.toJSON();
        x['$key'] = e.key;
        this.todoList.push(x as TodoModel)
      })
      this._accesoriesService.hideLoading();
      console.log(this.todoList)
    })
  }

  addNew(){
    const dialogRef = this.dialog.open(DialogAddComponent, {
      width: '350px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  change_slide(x: TodoModel){
    console.log(x)
  }

  edit(x: TodoModel){
    console.log(x)
  }
  

  

  addTodo(todo: TodoModel){
    this.todo = {
      title: 'Todo Title 2',
      description: 'Todo description 2',
      status: false,
      creator: 'Hunter',
      dateCreate: new Date(),
      modifier: null,
      dateModify: null,
      completed: false,
      dateComplete: new Date(),
    }
    this._todoService.addTodo(this.todo);
  }

  editTodo(todo: TodoModel){
    //this._todoService.selectedTask_temporally = Object.assign({}, todo);
    this.todo = {
      $key: '-L_GH-ZcIljKupg7Fl2p',
      title: 'X',
      description: 'description-x',
      status: false,
      creator: 'Hunter',
      dateCreate: new Date(),
      modifier: 'Hunter',
      dateModify: new Date(),
      completed: false,
      dateComplete: new Date(),
    }
    this._todoService.updateTodo(this.todo)
    
}

}
