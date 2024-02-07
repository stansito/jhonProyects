
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

  @ViewChild(EjercicioModalComponent, { static: true }) ionModal!: EjercicioModalComponent;


  
  ejercicio: string;
  numeroSerie: number;
  repeticiones: number;
  peso : number
  seriesList: { numeroSerie: number, repeticiones: number, peso: number }[] = [];


  constructor(private modalCtrl: ModalController) {
    this.ejercicio = '';
    this.numeroSerie= 0;
    this.repeticiones = 0;
    this.peso = 0;

    this.seriesList = [
      { numeroSerie: 0, repeticiones: 0, peso: 0 }, // Serie vacía inicial
    ];
  } 

  // Declara nuevaSerie como una propiedad del componente
  nuevaSerie: { numeroSerie: number; repeticiones: number; peso: number } = {
    numeroSerie: 0,
    repeticiones: 0,
    peso: 0,
  };

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({ ejercicio: this.ejercicio, seriesList: this.seriesList }, 'confirm');
  }
  

  selectedExercicesText = '0 Items';
  selectedExercices: number = 0;

exercices: Item[] = [
  { text: 'Sentadillas', value: 'sentadilla', grupoMuscular: 'Pierna' },
  { text: 'Press de banca', value: 'press de banca', grupoMuscular: 'Pecho' },
  { text: 'Peso muerto', value: 'Peso muerto', grupoMuscular: 'Pierna' },
  { text: 'Pull-ups', value: 'Pull-ups', grupoMuscular: 'Espalda' },
  { text: 'Flexiones ', value: 'Flexiones', grupoMuscular: 'Pecho' },
  { text: 'Remo con barra', value: 'Remo con barra', grupoMuscular: 'Espalda' },
  { text: 'Fondos en paralelas', value: 'Fondos en paralelas', grupoMuscular: 'Tríceps' },
  { text: 'Curl de bíceps', value: 'Curl de bíceps', grupoMuscular: 'Bíceps' },
  { text: 'Press militar', value: 'Press militar', grupoMuscular: 'Hombros' },
  { text: 'Zancadas ', value: 'Zancadas', grupoMuscular: 'Pierna' }
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
  increaseValue(property: string, index: number) {
    if (property === 'numeroSerie') {
      this.seriesList[index].numeroSerie++;
    } else if (property === 'repeticiones') {
      this.seriesList[index].repeticiones++;
    } else if (property === 'peso') {
      this.seriesList[index].peso++;
    }
  }
  
  decreaseValue(property: string, index: number) {
    if (property === 'numeroSerie' && this.seriesList[index].numeroSerie > 0) {
      this.seriesList[index].numeroSerie--;
    } else if (property === 'repeticiones' && this.seriesList[index].repeticiones > 0) {
      this.seriesList[index].repeticiones--;
    } else if (property === 'peso' && this.seriesList[index].peso > 0) {
      this.seriesList[index].peso--;
    }
  }
 
  firstEntry = true;

  agregarSerie() {
    
    // Agregar la nueva serie a la lista
    this.seriesList.push({ ...this.nuevaSerie });
  
    // Reiniciar los campos de entrada para la próxima serie
    this.nuevaSerie = {
      numeroSerie: 0,
      repeticiones: 0,
      peso: 0,
    };
  
    // Cambiar firstEntry a falso después de la primera entrada
    this.firstEntry = false;
  }
}




