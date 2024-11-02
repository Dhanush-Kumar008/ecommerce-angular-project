import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.css'
})
export class CategoryProductComponent {
  productsByCategoryId:any[]=[]
  constructor(private active :ActivatedRoute,private master:ProductService){
    this.active.params.subscribe((res:any)=>{
      this.getProductByCategoryId(res.id)
    })
    
  }

  getProductByCategoryId(id:any){
    this.master.getAllProductByCategoryId(id).subscribe((res:any)=>{
    this.productsByCategoryId=res.data
  })


  }
}