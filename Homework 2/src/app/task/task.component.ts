import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() toDoShow!: Task;
  @Output() toDoDel: EventEmitter<TaskComponent> = new EventEmitter();
  @Output() toDoClick: EventEmitter<TaskComponent> = new EventEmitter();

  isSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toDoDelete() {
    this.toDoDel.emit(this);
  }

  toDoSelect() {
    this.toDoClick.emit(this);
  }

}
