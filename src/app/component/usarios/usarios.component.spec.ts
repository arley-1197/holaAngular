import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsariosComponent } from './usarios.component';

describe('UsariosComponent', () => {
  let component: UsariosComponent;
  let fixture: ComponentFixture<UsariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
