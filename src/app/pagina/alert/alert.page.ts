import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { AlertController, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, ComponentesModule],
})
export class AlertPage implements OnInit {

  constructor(private CtrlAlert: AlertController) { }

  ngOnInit() {
  }

  async funcionalerta1() {
    const alert = await this.CtrlAlert.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }
}
