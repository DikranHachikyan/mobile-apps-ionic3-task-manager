import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Task, TaskStatus } from '../../model/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Task[] = [
  	{ id:11, title:"Gratitude list – 5 things you are grateful for", status:TaskStatus.open},
    { id:12, title:"Start the day with your WHY.", status:TaskStatus.open},
    { id:13, title:"Fresh green juice", status:TaskStatus.current},
    { id:14, title:"Write 500 words", status:TaskStatus.done},
    { id:15, title:"Review the day and check in with the next few days", status:TaskStatus.done},
    { id:16, title:"Clear desk ready for a fresh day tomorrow!", status:TaskStatus.open}
  ];
  
  taskStatus:any = TaskStatus;

  constructor(public navCtrl: NavController) {

  }

}
