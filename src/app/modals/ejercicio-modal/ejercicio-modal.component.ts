
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { Item } from '../types';

interface Serie {
  numeroSerie: number;
  repeticiones: number;
  peso: number;
}

@Component({
  selector: 'app-ejercicio-modal',
  templateUrl: './ejercicio-modal.component.html',
  styleUrls: ['./ejercicio-modal.component.scss'],
})
export class EjercicioModalComponent  {
  @Input() rutinaActual: { ejercicio: string, seriesList: { numeroSerie: number, repeticiones: number, peso: number }[], rutina?: boolean }= {
    ejercicio: '',
    seriesList: [],
    rutina: false
  };
  @ViewChild(EjercicioModalComponent, { static: true }) ionModal!: EjercicioModalComponent;

  ejercicio: string ='';
  numeroSerie: number =0;
  repeticiones: number =0;
  peso : number = 0
  seriesList: { numeroSerie: number, repeticiones: number, peso: number }[] = [];

  constructor(private modalCtrl: ModalController, private navParams: NavParams) {
    // ... (código existente)

    // Verifica si hay un ejercicio actual enviado como parámetro
    if (this.navParams.get('rutinaActual')) {
      const rutinaActual = this.navParams.get('rutinaActual');
      this.ejercicio = rutinaActual.nombreEjercicio;
      this.seriesList = rutinaActual.series.map((serie: Serie) => ({ ...serie }));
    }else{
      this.ejercicio = ''; // Asigna el valor que desees como predeterminado
      this.seriesList = [
      { numeroSerie: 0, repeticiones: 0, peso: 0 }, // Valores predeterminados para la primera serie
        ]
      }
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
    this.modalCtrl.dismiss({ ejercicio: this.ejercicio, series: this.seriesList }, 'confirm');
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




