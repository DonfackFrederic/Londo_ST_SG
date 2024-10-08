import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandiaturesGridComponent } from './candiatures-grid.component';

describe('CandiaturesGridComponent', () => {
  let component: CandiaturesGridComponent;
  let fixture: ComponentFixture<CandiaturesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandiaturesGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandiaturesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
