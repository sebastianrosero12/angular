import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Producto } from '../models/Producto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get('http://localhost:3000/productos');
  }

  getProducto(id: string){
    return this.http.get('http://localhost:3000/productos/'+id);
  }
  saveProducto(producto: Producto){
    return this.http.post('http://localhost:3000/productos',producto);
  }
  deleteProducto(id:String){
    return this.http.delete('http://localhost:3000/productos/'+id);
    
  }
  updateProducto(id:string|number, updateProducto: Producto): Observable<Producto> {
    return this.http.put('http://localhost:3000/productos/'+id,updateProducto);
  }
}
