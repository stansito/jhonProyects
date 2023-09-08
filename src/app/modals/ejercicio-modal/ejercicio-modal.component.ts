import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Item } from '../types';


@Component({
  selector: 'app-ejercicio-modal',
  templateUrl: './ejercicio-modal.component.html',
  styleUrls: ['./ejercicio-modal.component.scss'],
})
export class EjercicioModalComponent  {

  @ViewChild('modal', { static: true }) modal!: IonModal;
  
  ejercicio: string;
  series: number;
  repeticiones: number;
  peso : number

  constructor(private modalCtrl: ModalController) {
    this.ejercicio = '';
    this.series= 0;
    this.repeticiones = 0;
    this.peso = 0;
  }



  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({ ejercicio: this.ejercicio, series: this.series, repeticiones: this.repeticiones, peso: this.peso }, 'confirm');
  }


  selectedExercicesText = '0 Items';
  selectedExercices: number = 0;

  exercices: Item[] = [
    { text: 'Sentadillas', value: 'sentadilla' },
    { text: 'Press de banca', value: 'press de banca' },
    { text: 'Peso muerto', value: 'Peso muerto' },
    { text: 'Pull-ups', value: 'Pull-ups' },
    { text: 'Flexiones ', value: 'Flexiones' },
    { text: 'Remo con barra', value: 'Remo con barra' },
    { text: 'Fondos en paralelas', value: 'Fondos en paralelas' },
    { text: 'Curl de bíceps', value: 'Curl de bíceps' },
    { text: 'Press militar', value: 'Press militar' },
    { text: 'Zancadas ', value: 'Zancadas ' }
  ];

  private formatData(data: string ){
    if (data!== null) {
      const ejercicio = this.exercices.find((ejercicio) => ejercicio.value === data);
      return ejercicio?.text || ''; // Usamos el operador ?. para acceder a ejercicio.text
    }

    return `${data} items`;
  }

  exerciceSelectionChanged(exercices: string) {
    this.ejercicio = exercices;
  
    this.modalCtrl.dismiss();
  }
  // Incrementar el valor de la propiedad especificada en la entrada
  increaseValue(property: string) {
    if (property === 'series') {
      this.series++;
    } else if (property === 'repeticiones') {
      this.repeticiones++;
    } else if (property === 'peso') {
      this.peso++;
    }
  }

  // Decrementar el valor de la propiedad especificada en la entrada
  decreaseValue(property: string) {
    if (property === 'series' && this.series > 0) {
      this.series--;
    } else if (property === 'repeticiones' && this.repeticiones > 0) {
      this.repeticiones--;
    } else if (property === 'peso' && this.peso > 0) {
      this.peso--;
    }
  }

    
}




