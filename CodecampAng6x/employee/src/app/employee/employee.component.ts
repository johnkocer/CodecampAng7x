import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  public employeeList: Employee[];
  showEditor = true;
  myName: string;
  newEmployee: Employee;
  findEmployee: Employee;

  constructor(private dataService: EmployeeService) {
    this.newEmployee = new Employee();
    this.findEmployee = new Employee();
    this.findEmployee.name = "";
  }

  // if you want to debug info  just uncomment the console.log lines.
  ngOnInit() {
    //    console.log("in ngOnInit");
    this.get();
  }

  seach() {
    console.log("In employeeSearch ");
    if (!this.findEmployee.name.trim()) return;

    this.dataService.search(this.findEmployee.name).subscribe(
      (data: Employee[]) => {
        console.log("found employees" + data);
        this.employeeList = data;
      },
      error => {
        console.log("could not get Employees", error);
        this.employeeList = null;
      }
    );
  }
  get() {
    console.log("IngetAll ");
    this.dataService.get().subscribe(
      (data: Employee[]) => {
        console.log("found employees" + data);
        this.employeeList = data;
      },
      error => {
        console.log("could not get Employees", error);
        this.employeeList = null;
      }
    );
  }

  public add(item: Employee) {
    //console.dir(item);
    //console.log("In add: " + this.newEmployee);
    this.dataService.add(this.newEmployee).subscribe(employee => {
      this.employeeList.push(employee);
      console.dir(employee);
    });
    //console.dir(employeeId);
    //   this.get();
  }
  public update(item: Employee) {
    console.dir(item);
    //console.log("In updateEmployee: " + item);
    this.dataService.update(item).subscribe(employee => {
      //this.employeeList.push(employee);
      console.dir(employee);
      this.get();
    });
    //    console.log("in updateEmployee:" );
  }

  public delete(employee: Employee) {
    console.log("in deleteEmployee: " + employee.id);
    // this.dataService.deleteEmpoloyee(employeeId);

    this.employeeList = this.employeeList.filter(h => h !== employee);
    this.dataService.delete(employee).subscribe();
  }

  getById(id: number) {
    this.dataService.getById(id).subscribe(
      e => {
        if (e != undefined) this.findEmployee = e;
      },
      error => {
        console.log("could not get Employees", error);
      }
    );
  }
}

export class Employee {
  public id: number;
  public name: string;
  public gender: string;
  public departmentId: number;
  public salary: number;
}
