import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './shared/app-routing-module';

import { environment } from '../environments/environment';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './notes/note/note.component';
import { HeaderComponent } from './header/header.component';
import { WorkbookComponent } from './workbook/workbook.component';
import { NewNoteComponent } from './notes/new-note/new-note.component';
import { HomeComponent } from './home/home.component';
import { ModalPopUpComponent } from './shared/modal-popup/modal-popup.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalenderComponent } from './calender/calender.component';
import { KeysPipe } from './shared/keysPipe.pipe';
import { SafeHTMLPipe } from './shared/safe-html.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LoadingSpinnerComponent,
    NotesComponent,
    NoteComponent,
    HeaderComponent,
    WorkbookComponent,
    NewNoteComponent,
    HomeComponent,
    UserProfileComponent,
    ConfirmationDialogComponent,
    ModalPopUpComponent,
    KeysPipe, SafeHTMLPipe,
    CalenderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    NgbModule,
    NgbModalModule,
    BrowserAnimationsModule, // required animations module
    LoadingBarModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      closeButton: true,
      easing: 'ease-in',
      enableHtml: true,
      progressBar: true,
      progressAnimation: 'decreasing'
    }),
    FullCalendarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent,
       ModalPopUpComponent],
})
export class AppModule { }
