import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VehicleComponent } from './vehicle.component';

describe('VehicleComponent', () => {
  let component: VehicleComponent;
  let fixture: ComponentFixture<VehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('A hozzáadás gomb létezése', () => {
    const gomb = fixture.debugElement.queryAll(By.css('button'));
    expect(gomb.length).toBe(4);
  });
  it('A táblázat létezik', () => {
    const table = fixture.debugElement.queryAll(By.css('table'));
    expect(table.length).toBe(1);
  });
  it('A Modal létezik', () => {
    const modal = fixture.debugElement.queryAll(By.css('#addVehicleModal'));
    expect(modal.length).toBe(1);
  });
});
