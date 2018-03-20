import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//from libs
import { ItemSliding,
         AlertController } from 'ionic-angular';
//app
import { Task, TaskStatus } from '../../model/task';
import { TasksDataProvider } from '../../providers/tasks-data/tasks-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: Task[] = [];
  
  taskStatus:any = TaskStatus;

  reorderIsEnabled:boolean = false;

  constructor(public navCtrl: NavController,
              private tasksDataProvider:TasksDataProvider,
              private alertCtrl:AlertController) {

  }

  ionViewDidLoad(){
    this.loadTasks();
  }

  loadTasks():void{
     console.log('before data load');
     this.tasksDataProvider.loadTasks()
                           .subscribe( (data)=>this.tasks = data ,
                                       (err)=>console.log(`Error load tasks ${err}`),
                                       ()=>console.log(`Load Tasks Completed`));
     console.log('after data load');
  }

  archiveTask(taskId:number, slidingItem: ItemSliding):void{
    console.log(`archive:${taskId}`);
    slidingItem.close();
  }

  editTask(taskId:number, slidingItem: ItemSliding):void{
    console.log(`edit:${taskId}`);
    slidingItem.close();
  }

  markAsDone(taskId:number, slidingItem: ItemSliding):void{
    console.log(`mark as done:${taskId}`);
    slidingItem.close();
  }

  toggleReorder():void{
    this.reorderIsEnabled = ! this.reorderIsEnabled;
  }

  addNewTask():void{
    let newTask = this.alertCtrl.create({
        title: 'Add New Task',
        message: 'Enter your task',
        inputs:[{
          type:'text',
          name:'taskTitle',
          placeholder:'Task Title'
        }], //inputs
        buttons:[{
          text:'Cancel'
        },
        {
          text:'Add',
          handler: (data)=>{
            
            let task:Task = {
              id: 100,
              title: data.taskTitle,
              status: this.taskStatus.open
            }
            console.log(task);
            this.tasksDataProvider.addTask(task);
          }
        }]//buttons
    }); //create

    newTask.present();
    
  }

  reloadTasks(event):void{
    setTimeout(()=>event.complete(), 1000);
  }
}
