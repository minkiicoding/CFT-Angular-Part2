import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() toDoShow!: Task
  @Output() toDoDel: EventEmitter<TaskComponent> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.toDoDel.emit(this);
  }

}
