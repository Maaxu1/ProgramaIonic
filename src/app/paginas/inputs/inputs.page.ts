import { CommonModule } from '@angular/common';
import { Component, numberAttribute, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

interface generalData {
  name: string;
  last_name: string;
  adress: string;
  gender: string;
  email: string;
  birth: string;
  marital_status: string;
};

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
  imports: [IonicModule, RouterModule, CommonModule, ComponentesModule]
})

export class InputsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  currentDate: string = new Date().toISOString();
  
  Datos: generalData[] = [
    {
      name: "Erick Maximiliano",
      last_name: "González Alvarado",
      adress: "Montebello Sauce #319 Tamaulipas, Miguel Aleman",
      gender: "Masculino",
      email: "max05gonz@gmail.com",
      birth: this.handleDate(2004, 8, 5),
      marital_status: "Soltero"
    },
  ]

  handleDate(year: number, month: number, day: number) {
    return new Intl.DateTimeFormat('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(year, month - 1, day));
  }

  calculateAge(birth: string): number {
    const [day, month, year] = birth.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
}
