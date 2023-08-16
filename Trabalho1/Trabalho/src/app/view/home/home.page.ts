import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public primeiroNumero!:number;
  public segundoNumero!:number;
  public escolha!:number;

  constructor(private alertController:AlertController) { }
  calcular(){
    if (this.primeiroNumero && this.segundoNumero && this.escolha){
      if (this.escolha == 0){
        let resultadoconta = this.primeiroNumero + this.segundoNumero;
        this.presentAlert("" + resultadoconta);
      }
      else if (this.escolha == 1){
        let resultadoconta = this.primeiroNumero - this.segundoNumero;
        this.presentAlert("" + resultadoconta);
        
      }
      else if (this.escolha == 2){
        let resultadoconta = this.primeiroNumero / this.segundoNumero;
        this.presentAlert("" + resultadoconta);
        
      }
      else if (this.escolha == 3){
        let resultadoconta = this.primeiroNumero * this.segundoNumero;
        this.presentAlert("" + resultadoconta);
      }
      this.primeiroNumero=NaN;
      this.segundoNumero=NaN;
      this.escolha=NaN;
    }
    else{
      this.presentAlert('Todos os campos são obrigatórios')
    }
  }
  async presentAlert(message:string) {
    const alert = await this.alertController.create({
      header: 'O resultado da Conta é:',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}


