import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditorFieldComponent } from './page-editor-field.component';

describe('PageEditorFieldComponent', () => {
  let component: PageEditorFieldComponent;
  let fixture: ComponentFixture<PageEditorFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditorFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
