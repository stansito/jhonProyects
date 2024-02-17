// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {EjercicioModalComponent} from '../modals/ejercicio-modal/ejercicio-modal.component'
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { CrearRutinaModalComponent} from '../modals/crear-rutina-modal/crear-rutina-modal.component';


interface Serie {
  numeroSerie: number;
  repeticiones: number;
  peso: number;
}

interface Ejercicio {
  nombreEjercicio: string;
  rutina: boolean;
  series: Serie[];
}

interface Rutina {
  nombreRutina: string;
  ejercicios: Ejercicio[];
}

@Component({
  selector: 'app-rutina-container',
  templateUrl: './rutina-container.component.html',
  styleUrls: ['./rutina-container.component.scss'],
})
// eslint-disable-next-line @typescript-eslint/no-unused-vars

export class RutinaContainerComponent {

  rutina: Rutina = {
    nombreRutina: '',
    ejercicios: [],
  };
  
  index: number = 0;  // Agrega esta línea para declarar la variable 'index'
  constructor(private modalCtrl: ModalController, private storage: Storage, private router: Router) {
    this.loadStoredData();
  }

  async loadStoredData() {
    const storage = await this.storage.create(); // Crear la base de datos
    const storedData = await storage.get('rutina');
    if (storedData) {
      this.rutina = storedData;
    }
  }

  async crearNuevaRutina() {
    const modal = await this.modalCtrl.create({
      component: CrearRutinaModalComponent,
      backdropDismiss: false,
      componentProps: {}
    });
    modal.onDidDismiss().then((result) => {
      if (result.role === 'confirm' && result.data) {
        // Establecer el nombre de la rutina, independientemente de si ya existe o no
        this.rutina.nombreRutina = result.data.nombreRutina;
        this.saveData();
      }
    });
    modal.present();
  }
  

  async saveData() {
    await this.storage.set('rutina', this.rutina);
  }

  async openModal() {
    const modalData = await this.modalCtrl.create({
      component: EjercicioModalComponent,
      componentProps: {
        rutina: this.rutina
      },
    });
  
    modalData.present();
    const { data, role } = await modalData.onDidDismiss();
  
    if (role === 'confirm' && data) {
      if (!this.rutina.nombreRutina) {
        console.log('No hay una rutina existente. Crear una nueva rutina.');
        this.rutina.nombreRutina = data.nombreRutina;
      }
  
      // Verificar si ya existe el ejercicio en la rutina
      const existingExercise = this.rutina.ejercicios.find(e => e.nombreEjercicio === data.nombreEjercicio);
  
      if (existingExercise) {
        // Si el ejercicio ya existe, actualiza las series
        existingExercise.series = data.series;
      } else {
        // Si el ejercicio no existe, agrégalo a la lista
        this.rutina.ejercicios.push({ ...data });
      }
  
      this.saveData();
    }
  }
  async agregarEjercicioARutina(index: number) {

      const modalData = await this.modalCtrl.create({
        component: EjercicioModalComponent,
        componentProps: {
          rutinaActual: this.rutina.ejercicios[index]
        },
      });
      modalData.present();
      const { data, role } = await modalData.onDidDismiss();
      if (role === 'confirm' && data) {
        // Encuentra el índice del ejercicio actual en la lista
        
          // Si el ejercicio no existe, agrégalo a la lista como una nueva entrada
          const nuevoEjercicio: Ejercicio = {
            nombreEjercicio: data.ejercicio,
            rutina: false, // Ajusta según tu lógica
            series: data.series, // Ajusta según tu lógica
          };
    
          this.rutina.ejercicios.push(nuevoEjercicio);
          this.saveData();
      }
  }

async editarNombreRutina() {
  const modal = await this.modalCtrl.create({
    component: CrearRutinaModalComponent,
    backdropDismiss: false,
    componentProps: {
      nombreRutina: this.rutina.nombreRutina  // Pasa el nombre de la rutina actual a la modal de edición
    }
  });

  modal.onDidDismiss().then((result) => {
    if (result.role === 'confirm' && result.data) {
      // Actualiza el nombre de la rutina
      this.rutina.nombreRutina = result.data.nombreRutina;
      this.saveData();
    }
  });

  modal.present();
}

  async editarEjercicio(index: number) {
    const modalData = await this.modalCtrl.create({
      component: EjercicioModalComponent,
      componentProps: {
        rutinaActual: this.rutina.ejercicios[index]
      },
    });
  
    modalData.present();
  
    const { data, role } = await modalData.onDidDismiss();
  
    if (role === 'confirm' && data) {
      // Encuentra el índice del ejercicio actual en la lista
      const existingIndex = index;
  
      if (existingIndex !== -1) {
        // Si el ejercicio ya existe, actualiza las series
        this.rutina.ejercicios[existingIndex].series = data.series;
        this.rutina.ejercicios[existingIndex].nombreEjercicio = data.ejercicio;
        this.saveData();
      } else {
        // Si el ejercicio no existe, agrégalo a la lista como una nueva entrada
        const nuevoEjercicio: Ejercicio = {
          nombreEjercicio: data.ejercicio,
          rutina: false, // Ajusta según tu lógica
          series: data.series, // Ajusta según tu lógica
        };
  
        this.rutina.ejercicios.push(nuevoEjercicio);
        this.saveData();
      }
    }
  }

  toggleRutina(entry: any) {
    entry.rutina = !entry.rutina;
  }
  /*createRutina() {
    const rutinaEntries = this.dataEntries.filter(entry => entry.ejercicio);
    // Lógica adicional para manejar la nueva rutinaEntries según tus necesidades
    console.log('Nueva Rutina:', rutinaEntries);
  
    // Guardar la rutina en algún servicio o en el almacenamiento local
    // Esto es solo un ejemplo, ajusta según tu necesidad
    this.storage.set('rutinaActual', rutinaEntries);
  
    // Navegar a la página de la rutina
    this.router.navigate(['/tabs/rutina']).then(() => {
      // Otro código que deseas ejecutar después de la navegación
      console.log('entra');
    });
  }
  toggleRutina(entry: any) {
    entry.rutina = !entry.rutina;
  }*/
}
