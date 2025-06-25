import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { AlertController } from '@ionic/angular/standalone';
import { IonAlert, IonButton } from '@ionic/angular/standalone';
import type { OverlayEventDetail } from '@ionic/core';

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
      header: 'Un título corto es mejor',
      subHeader: 'Un subheader es opcional',
      message: 'Un mensaje debería ser corto',
      buttons: ['Action'],
    });

    await alert.present();
  }

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
      buttons: this.alertButtons,    
    });

    await alert.present();
  }

  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alerta cancelada');
      },
    },
   {
    text: 'OK',
    role: 'confirm',
    handler: (datos: any) => {
      console.log('Alerta aceptada');
      console.log('Datos del formulario:\ny6', datos);
    },
  },
];

  setResult(event: CustomEvent<OverlayEventDetail>) {
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

  async showAlertPersonalizada() {
    const alertPersonalizada = await this.alertController.create({
      backdropDismiss: false, // Forzar que no se cierre la alerta, sin elegir una opción
      header: '¿Qué quieres hacer con tu Producto?',
      subHeader: 'Soy algo referente al producto que debes de elegir',
      message: 'Selecciona una opción',

      buttons: ['Guardar', 'Borrar', 'Cancelar'],
    });

    await alertPersonalizada.present();
  }
  
}