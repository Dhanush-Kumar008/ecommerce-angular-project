import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  product$!:Observable<any>;
  constructor(private master:ProductService){
    this.product$=master.getAllCategory().pipe(map((item:any)=>{
      return item.data;
    }))
  }

  deleteCategoryById(id:any){
    const isdelete=confirm("Are you sure wanna delete this category")
    if(isdelete)
      this.master.deleteCategoryById(id).subscribe((res:any)=>{
        alert("Category deleted Successfully !")
        })
      }
  }
