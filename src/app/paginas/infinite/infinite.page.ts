import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfiniteScrollCustomEvent, IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, ComponentesModule]
})
export class InfinitePage implements OnInit {
  datos: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count: number = this.datos.length + 1;
    for(let i: number = 0; i < 28; i++) {
      this.datos.push(`Hola ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
