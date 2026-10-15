import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDeTareas } from './lista-de-tareas';

describe('ListaDeTareas', () => {
  let component: ListaDeTareas;
  let fixture: ComponentFixture<ListaDeTareas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeTareas],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeTareas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
