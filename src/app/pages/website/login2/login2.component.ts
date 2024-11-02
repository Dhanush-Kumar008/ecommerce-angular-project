import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
  loginObj:any={
    "UserName": "",
    "UserPassword": ""
   
  }

  constructor(private master:ProductService,private route:Router){

  }

  onLogin(){
    this.master.onlogin(this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("Successfully logged in")
        this.route.navigate(['/shop'])

      }
      else{
        alert(res.message)
      }
    })

  }

}
