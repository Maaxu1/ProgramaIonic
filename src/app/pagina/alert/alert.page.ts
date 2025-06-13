import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { AlertController } from '@ionic/angular/standalone';
import { IonAlert, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, ComponentesModule],
  
})

export class AlertPage implements OnInit {
  constructor(private alertController: AlertController) {}
       
  ngOnInit() {
  }
  async funcionAlerta1() {
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],

    
    });

    
    await alert.present();
  }

  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Nombre',
    },
    {
      placeholder: 'Apellido Paterno',
      attributes: {
        maxlength: 20,
      },
    },
    {
      placeholder: 'Apellido Materno',
      attributes: {
        maxlength: 20,
      },
    },
    {
      type: 'number',
      placeholder: 'Edad',
      min: 1,
      max: 100,
    },
  ];

  async funcionCosole() {
    const alert = await this.alertController.create({
      header: 'Mensaje Consola',
      subHeader: '',
      message: '',
      buttons: ['Action'],

    
    });

    
    await alert.present();
  }
  
}