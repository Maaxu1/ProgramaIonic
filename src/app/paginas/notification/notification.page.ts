import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import * as moment from 'moment-timezone';
import { INotification } from 'src/app/models/notification.model';
import { NotificationService } from 'src/app/services/notification.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, FormsModule, ComponentesModule],
})
export class NotificationPage {
  private notificationService: NotificationService = inject(NotificationService)
  private toastController: ToastController = inject(ToastController)

  public notification: INotification = {
    title: '',
    body: '',
    date: moment().format('YYYY-MM-DDTHH:mm:ss'),
    url: ''
  }

  sendNotification() {
    console.log(this.notification);
    this.notificationService.sendNotification(this.notification).then( async (responseStatus: boolean) => {
      if(responseStatus){
        const toast = await this.toastController.create({
          message: 'Se ha enviado la notificacion',
          duration: 5000,
          position: 'top'
        })
        await toast.present();
      }else{
        const toast = await this.toastController.create({
          message: 'No se ha enviado la notificacion',
          duration: 5000,
          position: 'top'
        })
        await toast.present();
      }
    }).catch(async err => {
      const toast = await this.toastController.create({
        message: 'No se ha enviado la notificacion por error ' + JSON.stringify(err),
        duration: 5000,
        position: 'top'
      })
      await toast.present();
    })
  }
}
