import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipescComponent } from './pipesc.component';

describe('PipescComponent', () => {
  let component: PipescComponent;
  let fixture: ComponentFixture<PipescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
