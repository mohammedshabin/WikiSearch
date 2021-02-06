import { ComponentFixture, TestBed } from '@angular/core/testing';

import { finaldisplayComponent } from './finaldisplay.component';

describe('finaldisplayComponent', () => {
  let component: finaldisplayComponent;
  let fixture: ComponentFixture<finaldisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ finaldisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(finaldisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
