import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, ErrorHandler} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import 'hammerjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DatePipe, CurrencyPipe} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {
  MatDialogModule, MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule,
  MatNativeDateModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';



import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { UserComponent } from './portal/user/user.component';
import { AdminComponent } from './portal/admin/admin.component';
import { VenuesComponent } from './home/venues/venues.component';
import { AboutUsComponent } from './home/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PortalComponent,
    UserComponent,
    AdminComponent,
    VenuesComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
