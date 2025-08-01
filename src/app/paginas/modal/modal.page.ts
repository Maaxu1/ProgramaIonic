import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule, IonModal } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, ComponentesModule, FormsModule]
})
export class ModalPage implements OnInit {

  constructor(){};

  ngOnInit() {
      
  }

  @ViewChild(IonModal) modal!: IonModal;

  message = 'Este ejemplo de modal abre una pestaña modal cuando se presiona el botón';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hola, ${event.detail.data}!`;
    }
  }
}
