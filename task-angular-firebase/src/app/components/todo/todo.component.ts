import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { TodoModel } from 'src/app/models/todo';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: TodoModel[]
  todo: TodoModel
  myFormGroup: any;
  tasks: FormArray;

  constructor(
    private _todoService: TodoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log('ngOnInit')
    this.createGroup();
    this.getTodo();
    //this.addTodo(this.todo);
    //this.editTodo(this.todo)
  }

  createGroup(): any {
    this.myFormGroup = this.formBuilder.group({
      tasks: this.formBuilder.array([this.createItemArray()])
    });
  }

  createItemArray(): FormGroup {
    return this.formBuilder.group({
      title: new FormControl("", [Validators.required]),
      creator: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    });
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
      this.tasks = this.myFormGroup.get('tasks') as FormArray;
        this.tasks.removeAt(0);
        this.todoList.forEach(element => {
          this.tasks.push(this.loadTaskForms(element));
        });
        console.log(this.tasks)
    })
  }

  loadTaskForms(element: TodoModel): import("@angular/forms").AbstractControl {
    return this.formBuilder.group({
      title: new FormControl(element.title, [Validators.required]),
      creator: new FormControl(element.creator, [Validators.required]),
      description: new FormControl(element.description, [Validators.required]),
    });
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
