import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarRutinaPage } from './agregar-rutina.page';

describe('AgregarRutinaPage', () => {
  let component: AgregarRutinaPage;
  let fixture: ComponentFixture<AgregarRutinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgregarRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
