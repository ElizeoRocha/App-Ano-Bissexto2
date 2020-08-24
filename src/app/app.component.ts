import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ano Bissexto';
  public ano:number;
  public result:string;
  public bissexto:number;

  calcular(){

    this.bissexto = 0;
    
    if(this.bissexto == (this.ano % 4)){
    
        if(this.bissexto == (this.ano % 100)){
            if(this.bissexto == (this.ano % 400)){
                this.result = "Esse ano é bissexto"; 
            }else{
            this.result = "Esse ano não é bissexto";
            }
        }else{
            this.result = "Esse ano é bissexto";
        }
    }else{
        this.result = "Esse ano não é bissexto";
    
    }
    this.result = this.result;
    }
    
}

