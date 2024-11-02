import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
          this.route.navigate(['/product'])

        }
        else{
          alert(res.message)
        }
      })

    }

}
