import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  id:any=""
  categoryList:any[]=[]
 
 
 
  constructor(private master:ProductService,private route:Router){

  }

  ngOnInit(): void {
   this.getCategory()
  

    
  }

  getCategory(){
    this.master.getAllCategory().subscribe((res:any)=>{
    this.categoryList=res.data
    })

  }

  navigateTo(id:any){
    this.route.navigate(['/categoryproduct',id])
    
  }

  
 


}
