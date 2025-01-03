import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudoThrowsComponent } from './judo-throws.component';

describe('JudoThrowsComponent', () => {
  let component: JudoThrowsComponent;
  let fixture: ComponentFixture<JudoThrowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudoThrowsComponent]
    });
    fixture = TestBed.createComponent(JudoThrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
