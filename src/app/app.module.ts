import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MartComponent } from './mart/mart.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    AppComponent,
    MartComponent,
    ProductComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
       {path: "", component: MartComponent},
       {path: "product", component: ProductComponent},
       {path: "update/:id", component: UpdateComponent}
       
      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
