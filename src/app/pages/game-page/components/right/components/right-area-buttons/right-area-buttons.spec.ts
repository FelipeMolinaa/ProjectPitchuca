import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAreaButtons } from './right-area-buttons';

describe('RightAreaButtons', () => {
  let component: RightAreaButtons;
  let fixture: ComponentFixture<RightAreaButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightAreaButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightAreaButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
