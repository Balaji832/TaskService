import { Component,EventEmitter,inject,Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NgIf } from '@angular/common';
import { add } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent,NgIf],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) id!:string;
  addTask:boolean=false

  // private tasksService=inject(TasksService)
  constructor(private tasksServie:TasksService){}

  get userTasks(){

    return this.tasksServie.selectedUserTasks(this.id)

  }
   onAddTask(){
    this.addTask=true
   }
   onCancelAddTask(){
    this.addTask=false
   }
   

}
