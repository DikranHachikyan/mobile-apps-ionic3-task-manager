import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task, TaskStatus} from '../../model/task';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
//import { of } from 'rxjs/observable/of';
/*
  Generated class for the TasksDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const TASKS:Task[] = [
	{ id:11, title:"Gratitude list – 5 things you are grateful for", status:TaskStatus.open},
    { id:12, title:"Start the day with your WHY.", status:TaskStatus.open},
    { id:13, title:"Fresh green juice", status:TaskStatus.current},
    { id:14, title:"Write 500 words", status:TaskStatus.done},
    { id:15, title:"Review the day and check in with the next few days", status:TaskStatus.done},
    { id:16, title:"Clear desk ready for a fresh day tomorrow!", status:TaskStatus.open}
];
@Injectable()
export class TasksDataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TasksDataProvider Provider');
  }

  loadTasks():Observable<Task[]>{
  	return Observable.of(TASKS);
  	//return of(TASKS);
  }

  addTask(task:Task):void{
  	TASKS.unshift(task);
  }

}
