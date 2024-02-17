import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutinaContainerComponent } from './rutina-container.component';

describe('RutinaContainerComponent', () => {
  let component: RutinaContainerComponent;
  let fixture: ComponentFixture<RutinaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutinaContainerComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutinaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
