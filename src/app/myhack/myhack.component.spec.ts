import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhackComponent } from './myhack.component';

describe('MyhackComponent', () => {
  let component: MyhackComponent;
  let fixture: ComponentFixture<MyhackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
