import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerRutinaPage } from './ver-rutina.page';

describe('VerRutinaPage', () => {
  let component: VerRutinaPage;
  let fixture: ComponentFixture<VerRutinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
