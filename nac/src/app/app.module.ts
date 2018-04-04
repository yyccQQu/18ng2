import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { WuComponent } from './wu/wu.component';
import { Routes, RouterModule } from '@angular/router'
import { ProductService } from './shared/product.service';
import { LoggerService } from './shared/logger.service';
import { FilterPipe } from './pipe/filter.pipe';


const routeConfit: Routes = [
  {path: '', component: HomeComponent},
  { path: 'product/:productId', component: ProductDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    HomeComponent,
    ProductDetailComponent,
    WuComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routeConfit),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [ProductService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
