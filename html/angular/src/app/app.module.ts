﻿import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EditorImagemComponent } from './editor-imagem/editor-imagem.component';
import { HomeModule } from "app/home/home.module";

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpInterceptor } from "app/HttpInterceptor";

import { HomeComponent } from './home/home.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

import { PortifolioService } from "app/service/portifolio.service";
import { QuemSomosService } from './service/quem-somos.service';
import { DataService } from './service/data.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';



const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'quemSomos', component: QuemSomosComponent },
  { path: 'adm',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PortifolioComponent,
    QuemSomosComponent
  ],
  imports: [
 RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      ),
      BrowserModule,
      FormsModule,
      HttpModule,
      HomeModule,
      BrowserAnimationsModule,
      ToastModule.forRoot(),
      HttpClientModule,
      Ng4LoadingSpinnerModule 
  ],
  providers: [
      HttpInterceptor,
      PortifolioService,
      QuemSomosService,
      DataService,
      HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    

 }
