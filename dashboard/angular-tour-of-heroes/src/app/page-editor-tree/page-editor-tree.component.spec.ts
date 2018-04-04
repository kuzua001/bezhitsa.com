import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditorTreeComponent } from './page-editor-tree.component';

describe('PageEditorTreeComponent', () => {
  let component: PageEditorTreeComponent;
  let fixture: ComponentFixture<PageEditorTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditorTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditorTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
