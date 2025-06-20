import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

interface estlista {
  name: string;
  redirectTo: string;
  icon: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule],
})
export class InicioPage {

  /*constructor() { }

  ngOnInit() {
  }*/

  Elementos: estlista[] = [
    {
      name: 'Alerta',
      redirectTo: '/alert',
      icon: 'alert-outline'
    },
    {
      name: 'Card',
      redirectTo: '/card',
      icon: 'card-outline'
    },
    {
      name: 'Fecha',
      redirectTo: '/datetime',
      icon: 'calendar-number-outline'
    },
    {
      name: 'Checkbox',
      redirectTo: '/checkbox',
      icon: 'checkbox-outline'
    },
    {
      name: 'Fab',
      redirectTo: '/fab',
      icon: 'add-circle-outline',
    }
  ]

}
