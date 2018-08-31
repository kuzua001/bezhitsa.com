import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageChooserPopupComponent } from './image-chooser-popup.component';

describe('ImageChooserPopupComponent', () => {
  let component: ImageChooserPopupComponent;
  let fixture: ComponentFixture<ImageChooserPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageChooserPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageChooserPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
