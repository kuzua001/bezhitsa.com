import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomImageCropperComponent } from './image-cropper.component';

describe('ImageCropperComponent', () => {
  let component: CustomImageCropperComponent;
  let fixture: ComponentFixture<CustomImageCropperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomImageCropperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomImageCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
