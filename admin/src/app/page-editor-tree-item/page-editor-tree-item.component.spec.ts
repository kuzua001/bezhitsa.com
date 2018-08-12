import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditorTreeItemComponent } from './page-editor-tree-item.component';

describe('PageEditorTreeItemComponent', () => {
  let component: PageEditorTreeItemComponent;
  let fixture: ComponentFixture<PageEditorTreeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditorTreeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditorTreeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
