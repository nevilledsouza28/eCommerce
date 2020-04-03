import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FilterListBasedOnKeyValuePipe } from './shared/pipes/filter-list.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        TypeaheadModule.forRoot()
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ProductsComponent,
        FooterComponent,
        FilterListBasedOnKeyValuePipe
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
