import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './web-product.component.html',
  styleUrl: './web-product.component.css'
})
export class WebProductComponent {

  productList:any[]=[]
  categoryList:any[]=[]
  constructor(private master:ProductService,private route:Router){

  }

  ngOnInit(): void {
    this.getProduct()
    this.getCategory()
    
  }

  getProduct(){
    this.master.getAllProduct().subscribe((res:any)=>{
      this.productList=res.data
      console.log(this.productList)
    })
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
