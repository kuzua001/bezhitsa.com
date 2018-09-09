import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsEditorComponent } from './trainings-editor.component';

describe('TrainingsEditorComponent', () => {
    let component: TrainingsEditorComponent;
    let fixture: ComponentFixture<TrainingsEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TrainingsEditorComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TrainingsEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
