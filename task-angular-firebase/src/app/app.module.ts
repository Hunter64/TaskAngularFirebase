import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { TodoComponent } from './components/todo/todo.component';
import { TodoService } from './services/todo.service';
import { DialogAddComponent } from './components/dialog-add/dialog-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DialogAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
  entryComponents: [DialogAddComponent]
})
export class AppModule { }
