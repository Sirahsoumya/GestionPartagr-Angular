import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieBienListComponent } from './categorie-bien-list.component';

describe('CategorieBienListComponent', () => {
  let component: CategorieBienListComponent;
  let fixture: ComponentFixture<CategorieBienListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieBienListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieBienListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
