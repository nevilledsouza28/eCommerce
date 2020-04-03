import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// custom components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
// built in component
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FilterListBasedOnKeyValuePipe } from './shared/pipes/filter-list.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    FooterComponent,
    FilterListBasedOnKeyValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
