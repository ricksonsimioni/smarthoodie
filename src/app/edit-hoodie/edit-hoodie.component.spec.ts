import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHoodieComponent } from './edit-hoodie.component';

describe('EditHoodieComponent', () => {
  let component: EditHoodieComponent;
  let fixture: ComponentFixture<EditHoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHoodieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
