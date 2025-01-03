import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudoThrowsListComponent } from './judo-throws-list.component';

describe('JudoThrowsListComponent', () => {
  let component: JudoThrowsListComponent;
  let fixture: ComponentFixture<JudoThrowsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JudoThrowsListComponent]
    });
    fixture = TestBed.createComponent(JudoThrowsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
