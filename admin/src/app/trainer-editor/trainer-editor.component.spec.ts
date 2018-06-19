import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerEditorComponent } from './trainer-editor.component';

describe('TrainerEditorComponent', () => {
  let component: TrainerEditorComponent;
  let fixture: ComponentFixture<TrainerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
