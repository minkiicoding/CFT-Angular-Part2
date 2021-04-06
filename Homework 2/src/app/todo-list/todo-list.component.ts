import { Component, QueryList, ViewChildren } from '@angular/core';
import { Task } from '../task';
import { TaskComponent } from '../task/task.component';




@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
})
export class ToDoListComponent {
    @ViewChildren(TaskComponent)
    toDoListComp!: QueryList<TaskComponent>;
        toDos: Task[] = [];

        taskName!: string;
        taskDescription!: string;
        taskSelect!: Task;
        

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

        selectedToDoList(TaskComponent: TaskComponent) {
            this.clearSelected();
            TaskComponent.isSelected = true; 
            this.taskSelect = TaskComponent.toDoShow;   
        
    }
    
        clearSelected() {
            this.toDoListComp.forEach((toDo: { isSelected: boolean; }) => {
            toDo.isSelected = false;
        })
    }
}



