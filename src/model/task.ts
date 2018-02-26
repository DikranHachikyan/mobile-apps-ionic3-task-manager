export enum TaskStatus{
	open    = 'open',
	current = 'current',
	done    = 'done'
}

export class Task{
	constructor(public id:number,
				public title:string,
				public status:TaskStatus){}
}