import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorposeComponent } from './porpose.component';

describe('PorposeComponent', () => {
  let component: PorposeComponent;
  let fixture: ComponentFixture<PorposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorposeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
