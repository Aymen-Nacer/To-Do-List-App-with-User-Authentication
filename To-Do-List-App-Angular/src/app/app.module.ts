import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-list/task/task.component';
import { TaskFormComponent } from './task-list/task-form/task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
