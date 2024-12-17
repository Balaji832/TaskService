import { Injectable } from "@angular/core"
import { add } from "./new-task/new-task.component"

@Injectable({
    providedIn:'root'
})
export class TasksService{
    private dummyTasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ]
    
      constructor(){
        const tasks=localStorage.getItem('tasks')
        if(tasks){
            this.dummyTasks=JSON.parse(tasks)
        }
      }
      selectedUserTasks(id:string){
         return this.dummyTasks.filter((task)=>task.userId===id)
      }
      removeCompletedTasks(id:string){
        this.dummyTasks=this.dummyTasks.filter((element)=>element.id!==id)
        this.storingData()
      }
      addNewTask(AddTask:add,id:string){
            this.dummyTasks.unshift({
            id:new Date().getTime().toString(),
            userId:id,
            title:AddTask.title,
            summary:AddTask.summary,
            dueDate:AddTask.date
          })
          this.storingData()
      }
      storingData(){
        localStorage.setItem('tasks',JSON.stringify(this.dummyTasks))
      }
}