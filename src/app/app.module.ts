import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardcontainerModule } from './cardcontainer/cardcontainer.module';
import { SinglerecipeComponent } from './singlerecipe/singlerecipe/singlerecipe.component';
import { SinglerecipeModule } from './singlerecipe/singlerecipe.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarModule } from './navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { FilterModule } from './filter/filter.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CardcontainerModule,
    SinglerecipeModule,
    NavbarModule,
    FilterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
