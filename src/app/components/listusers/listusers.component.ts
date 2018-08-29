import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../userservice.service';
import { employee} from '../../employee';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  private employees:employee[];

  constructor(private userService:UserserviceService, private router:Router) { }


  ngOnInit() {
      this.userService.getUsers().subscribe((employees:any)=>{
        console.log(employees);
        this.employees=employees;
      },(error)=>{
        console.log(error);
      })
  }
  
  
  deleteUser(employee){
    this.userService.deleteUser(employee.id).subscribe((data)=>{
        this.employees.splice(this.employees.indexOf(employee),1);
    },(error)=>{
      console.log(error);
    });
  }


  updateUser(emp){  
    this.userService.setter(emp);
    this.router.navigate(['/form']);
  }
  

  newUser(){
  let emp = new employee();
   this.userService.setter(emp);
   this.router.navigate(['/form']);
   
  
  }



}
