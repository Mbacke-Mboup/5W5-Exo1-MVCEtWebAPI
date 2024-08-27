import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url:string = "http://localhost:5191/api/" 
  constructor(private http: HttpClient) { }
  
  async connexion(name:string):Promise<void>{
    let body = {
      username: name,
      password: "12345$Ss"
    }
    let x = await lastValueFrom(this.http.post<any>(this.url+"Account/Login",body))
    localStorage.setItem('authToken', x.token);
    localStorage.setItem('name', name);

  }

  async enregistrer(name:string):Promise<void>{
    let body = {
      username: name,
      password: "12345$Ss",
      passwordConfirm:"12345$Ss",
      email:name+"@b.com"
    }
    let x = await lastValueFrom(this.http.post<any>(this.url+"Account/Register",body))
  }

  async publique():Promise<any>{
   let x = await lastValueFrom(this.http.get<any>(this.url+"Account/PublicTest"))
    console.log(x);
    return x;
  }

  async private():Promise<any>{
    
    let x = await lastValueFrom(this.http.get<any>(this.url+"Account/PrivateTest"))
    console.log(x);
    return x;
  }

  
   logout():void{
    localStorage.removeItem("authToken")
    localStorage.removeItem("name")

  }

  async addData(name:string):Promise<void>{
    let data = {
      name: name
    }
    let x = lastValueFrom(this.http.post<string>(this.url+"TestData/CreateData",data))
    
  }
}
