import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsPresentationComponent } from './modals-presentation.component';

describe('ModalsPresentationComponent', () => {
  let component: ModalsPresentationComponent;
  let fixture: ComponentFixture<ModalsPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalsPresentationComponent]
    });
    fixture = TestBed.createComponent(ModalsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
