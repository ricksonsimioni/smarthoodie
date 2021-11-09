import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHoodieComponent } from './create-hoodie.component';

describe('CreateHoodieComponent', () => {
  let component: CreateHoodieComponent;
  let fixture: ComponentFixture<CreateHoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHoodieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
