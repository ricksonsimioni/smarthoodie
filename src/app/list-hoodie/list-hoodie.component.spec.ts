import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHoodieComponent } from './list-hoodie.component';

describe('ListHoodieComponent', () => {
  let component: ListHoodieComponent;
  let fixture: ComponentFixture<ListHoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHoodieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
