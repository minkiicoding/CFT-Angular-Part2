import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';




@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class ToDoListComponent {
        toDos: Task[] = [];

        taskName!: string;
        taskDescription!: string;
        

        addToDoList() {       
            let date = new Date();
            let toDoTask: Task = {
                id: date.toUTCString(),
                name: this.taskName,
                description: this.taskDescription,
            }
            this.toDos.push(toDoTask);
            
    }
        delToDoList(TaskComponent: TaskComponent) {
            
            this.toDos = this.toDos.filter(t => t.id !== TaskComponent.toDoShow.id)
        }

        
}


