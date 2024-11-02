import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  onlogin(obj:any):Observable<any>{
    return this.http.post("/api/BigBasket/Login",obj)
  }

  getAllCategory():Observable<any>{
    return this.http.get("/api/BigBasket/GetAllCategory")
  }

  getAllProductByCategoryId(id:any):Observable<any>{
    return this.http.get("/api/BigBasket/GetAllProductsByCategoryId?id="+id)
  }

  createProduct(obj:any):Observable<any>{
    return this.http.post("/api/BigBasket/CreateProduct",obj)
  }

  updateProduct(obj:any):Observable<any>{
    return this.http.post("/api/BigBasket/UpdateProduct",obj)
  }

  getAllProduct():Observable<any>{
   return this.http.get("/api/BigBasket/GetAllProducts")
  }

  deleteProductById(id:any):Observable<any>{
    return this.http.get("/api/BigBasket/DeleteProductById?id="+id)
  }

  deleteCategoryById(id:any):Observable<any>{
    return this.http.get("/api/BigBasket/DeleteCategoryById?id="+id)
  }




}
