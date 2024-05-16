import { Component } from '@angular/core';
import { Employee, Service, Task } from './workflow-status.service';

@Component({
  selector: 'app-workflow-status',
  templateUrl: './workflow-status.component.html',
  styleUrls: ['./workflow-status.component.scss']
})
export class WorkflowStatusComponent {
  tasksData: Task[];

  statusesData: string[];

  employeesData: Employee[];

  constructor(service: Service) {
    this.tasksData = service.getTasksData();
    this.employeesData = service.getEmployeesData();
    this.statusesData = [
      'Not Started',
      'Need Assistance',
      'In Progress',
      'Deferred',
      'Completed',
    ];
  }
}
