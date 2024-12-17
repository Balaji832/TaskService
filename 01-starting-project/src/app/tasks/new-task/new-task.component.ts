import { Component } from '@angular/core';
import { Output,EventEmitter,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

export interface add{
  title:string,
  summary:string,
  date:string
}
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() closePopup=new EventEmitter<void>()

  constructor(private tasksService:TasksService){}

  enteredTitle='';
  enteredSummary='';
  enteredDate='';

  closeAddTask(){
    this.closePopup.emit()
  }
  onSubmit(){
      this.tasksService.addNewTask({title:this.enteredTitle,
        summary:this.enteredSummary,
        date:this.enteredDate},this.userId)
        
        this.closePopup.emit()

  }
}
