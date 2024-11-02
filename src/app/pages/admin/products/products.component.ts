import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
    productObj:any={
      
        "ProductId": 0,
        "ProductSku": "",
        "ProductName": "",
        "ProductPrice": 0,
        "ProductShortName": "",
        "ProductDescription": "",
        "CreatedDate": new Date(),
        "DeliveryTimeSpan": "",
        "CategoryId":0 ,
        "ProductImageUrl": "",
        "UserId": 0
  }
    emptyObj:any={
      
        "ProductId": 0,
        "ProductSku": "",
        "ProductName": "",
        "ProductPrice": 0,
        "ProductShortName": "",
        "ProductDescription": "",
        "CreatedDate": new Date(),
        "DeliveryTimeSpan": "",
        "CategoryId":0 ,
        "ProductImageUrl": "",
        "UserId": 0
  }
  categoriesList:any[]=[]
  productList:any[]=[]
  
  constructor(private master:ProductService){
    this.getCategory()
    this.getProduct()
  }
  
  isCategory:boolean=false

  openSidePanel(){
    this.isCategory=true
  }

  closeSidePanel(){
    this.isCategory=false
    this.productObj=this.emptyObj
  }

  reset(){
    this.productObj=this.emptyObj
  }

  getCategory(){
    this.master.getAllCategory().subscribe((res:any)=>{
    this.categoriesList=res.data

    })
  }

  onSave(){
    this.master.createProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Product Created Successfully !")
        this.getProduct()
      }

      else{
        alert(res.message)
      }
    })

  }

  getProduct(){
    this.master.getAllProduct().subscribe((res:any)=>{
      this.productList=res.data
    })
  }

  onEdit(obj:any){
    this.openSidePanel()
    this.productObj=obj
  }

  updateProduct(){
    this.master.updateProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert("Product Updated Successfully")
      }
      else{
        alert(res.message)
      }
    })
  }

  deleteProduct(obj:any){
    const isdelete=confirm("Are you sure delete this product")
    if(isdelete){
      this.master.deleteProductById(obj.productId).subscribe((res:any)=>{
        if(res.result){
          alert("Successfully product is deleted")
          this.getProduct()
        }
        else{
          alert(res.message)
        }
      })
    }
  }

}
