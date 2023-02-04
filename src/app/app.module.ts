
// import { AppRoutingModule } from "./app-routing.module";
// import { AngularFireMessagingModule } from '@angular/fire/messaging';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
// import {MessagingService} from 'src/app/shared/services/messaging.service';
import { environment } from '../environments/environment';
import { AsyncPipe } from '../../node_modules/@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy,
} from "@angular/common";
import { NgModule } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { AgmCoreModule } from "@agm/core";
import { ToastrModule } from "ngx-toastr";


import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NavigationComponent } from "./shared/header-navigation/navigation.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";

import { Approutes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SpinnerComponent } from "./shared/spinner.component";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { FlatpickrModule } from "angularx-flatpickr";

import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { DialogmarksheetComponent } from './exam/dialogmarksheet/dialogmarksheet.component';
import { MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ExamdialogComponent } from './exam/examdialog/examdialog.component';
import { UniqueEmailValidatorDirective } from './shared/unique-email-validator.directive';
import {AuthguardserviceService} from './shared/services/authguardservice.service';





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20,
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    NavigationComponent,
    BreadcrumbComponent,
    SidebarComponent,
    DialogmarksheetComponent,
    UniqueEmailValidatorDirective,
 
 
  ],
  imports: [

    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(Approutes, { useHash: false }),
    PerfectScrollbarModule,
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule.forRoot(),
    DragDropModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    
    MatSnackBarModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyBUb3jDWJQ28vDJhuQZxkC0NXr_zycm8D0",
    // }),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   
    
    
  ],
  providers: [
    
    {
     
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    AuthguardserviceService
 
  ],
  bootstrap: [AppComponent],
  // entryComponents: [DialogmarksheetComponent,ExamdialogComponent]
})
export class AppModule {
  constructor(update: SwUpdate,snackbar:MatSnackBar) {
  update.available.subscribe( update => {
    console.log('update available');
    snackbar.open('hiiiii from sanackbar!!!!!');
    
})
  }
}
