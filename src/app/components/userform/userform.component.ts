import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../userservice.service';
import {employee} from '../../employee';


@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
private emp:employee;


  constructor(private userService:UserserviceService) { }

  ngOnInit() {
    this.emp=this.userService.getter();
  }


  


       processForm(f){
      
        if(f.value.id==undefined){
           this.userService.createUser(f).subscribe((emp)=>{
             console.log(emp);
            //  this.rotuer.navigate(['/']);
           },(error)=>{
             console.log(error);
           });
    



    }else{
       this.userService.updateUser(this.emp).subscribe((emp)=>{
         console.log(emp);
        //  this.rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
   }




}
