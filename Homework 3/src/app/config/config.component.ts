import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  @Input() groupName!: string;
  @Input() name!: string;
  @Input() remark!: string;
  @Input() detail!: string;
  @Input() value!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
