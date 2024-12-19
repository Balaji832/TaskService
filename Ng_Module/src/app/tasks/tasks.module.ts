import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CardComponent } from "../shared/card/card.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[TasksComponent,TaskComponent,NewTaskComponent,CardComponent],
    imports:[CommonModule,FormsModule],
    exports:[TasksComponent,CardComponent]
})
export class TasksModule{

}