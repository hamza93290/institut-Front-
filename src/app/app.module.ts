import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PresentationComponent } from './component/presentation/presentation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalsPresentationComponent } from './component/modals/modals-presentation/modals-presentation.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './component/footer/footer.component';
import { ProgrammeComponent } from './component/programme/programme.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    ModalsPresentationComponent,
    FooterComponent,
    ProgrammeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
