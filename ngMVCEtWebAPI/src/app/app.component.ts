import { Component } from '@angular/core';
import { ServerService } from './Service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngMVCEtWebAPI';

  name:string|null = localStorage.getItem('name');
  result:string = "Result"
  logged:boolean = localStorage.getItem('authToken')==null?false:true;
  constructor(private service:ServerService){}
  

  async connexion():Promise<void>{
   await this.service.connexion(this.name!)
   this.logged = true
  }

  async enregistrer():Promise<void>{
    await this.service.enregistrer(this.name!)
   }

  async publique():Promise<void>{
    this.result = JSON.stringify(await this.service.publique())
  }

  async private():Promise<void>{
    this.result = JSON.stringify(await this.service.private())
  }

  logout():void{
    this.service.logout()
this.logged = false    
this.result = "Result"
  }
}
