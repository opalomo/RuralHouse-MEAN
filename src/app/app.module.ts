import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// tslint:disable-next-line: max-line-length
import {MatInputModule, MatCardModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatDialogModule, MatDividerModule, MatFormFieldModule} from '@angular/material';
import {MatStepperModule, MatIconModule} from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import { RegisterDialogComponent } from '../components/register-dialog/register-dialog.component';
import { LoginDialogComponent } from '../components/login-dialog/login-dialog.component';

import {ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    RegisterDialogComponent,
    LoginDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  entryComponents: [
    RegisterDialogComponent,
    LoginDialogComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
