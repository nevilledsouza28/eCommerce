import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FilterListBasedOnKeyValuePipe } from '../shared/pipes/filter-list.pipe';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, TypeaheadModule.forRoot()],
      declarations: [ProductsComponent, FilterListBasedOnKeyValuePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
