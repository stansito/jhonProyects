import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { EjercicioComponentComponentModule } from '../ejercicio-component/ejercicio-component.module';
import { TabRutinaPage } from './tab-rutina.page';

describe('TabRutinaPage', () => {
  let component: TabRutinaPage;
  let fixture: ComponentFixture<TabRutinaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabRutinaPage],
      imports: [IonicModule.forRoot(),EjercicioComponentComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TabRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
