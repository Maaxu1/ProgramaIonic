import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, ComponentesModule]
})
export class DatetimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fechaActual: string = new Date().toISOString();

  fechaCambiada(event: any) {
    const isoDate = event.detail.value;
    const date = new Date(isoDate);

    const formateado = new Intl.DateTimeFormat('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);

    console.log("Fecha formateada:", formateado);
  }

}
