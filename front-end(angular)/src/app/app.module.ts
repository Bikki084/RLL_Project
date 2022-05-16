import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { StudentComponent } from './MyComponents/student/student.component';
import { FacultyComponent } from './MyComponents/faculty/faculty.component';
import { LibrarianComponent } from './MyComponents/librarian/librarian.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './MyComponents/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './MyComponents/admin-dashboard/admin-dashboard.component';
import { ProfileComponent } from './MyComponents/studentActions/profile/profile.component';
import { LibrarianDashboardComponent } from './MyComponents/librarian-dashboard/librarian-dashboard.component';
import { FacultyDashboardComponent } from './MyComponents/faculty-dashboard/faculty-dashboard.component';
import { MyprofileComponent } from './actions/student/myprofile/myprofile.component';
import { ViewresultComponent } from './actions/student/viewresult/viewresult.component';
import { ViewtimetableComponent } from './actions/student/viewtimetable/viewtimetable.component';
import { ViewassignmentComponent } from './actions/student/viewassignment/viewassignment.component';
import { ViewattendanceComponent } from './actions/student/viewattendance/viewattendance.component';
import { VieweventComponent } from './actions/student/viewevent/viewevent.component';
import { AddbookComponent } from './actions/library/addbook/addbook.component';
import { RequestbookComponent } from './actions/library/requestbook/requestbook.component';
import { IssuebookComponent } from './actions/library/issuebook/issuebook.component';
import { ReturnbookComponent } from './actions/library/returnbook/returnbook.component';
import { FtimetableComponent } from './actions/faculty/ftimetable/ftimetable.component';
import { FassignmentComponent } from './actions/faculty/fassignment/fassignment.component';
import { FresultsComponent } from './actions/faculty/fresults/fresults.component';
import { FattendanceComponent } from './actions/faculty/fattendance/fattendance.component';
import { FvieweventComponent } from './actions/faculty/fviewevent/fviewevent.component';
import { LvieweventComponent } from './actions/library/lviewevent/lviewevent.component';
import { ViewbooksComponent } from './actions/student/viewbooks/viewbooks.component';
import { StudentactionsComponent } from './actions/admin/studentactions/studentactions.component';
import { FacultyactionsComponent } from './actions/admin/facultyactions/facultyactions.component';
import { LibraryactionsComponent } from './actions/admin/libraryactions/libraryactions.component';
import { AddeventComponent } from './actions/admin/addevent/addevent.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    StudentComponent,
    FacultyComponent,
    LibrarianComponent,
    AdminComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    ProfileComponent,
    LibrarianDashboardComponent,
    FacultyDashboardComponent,
    MyprofileComponent,
    ViewresultComponent,
    ViewtimetableComponent,
    ViewassignmentComponent,
    ViewattendanceComponent,
    VieweventComponent,
    AddbookComponent,
    RequestbookComponent,
    IssuebookComponent,
    ReturnbookComponent,
    FtimetableComponent,
    FassignmentComponent,
    FresultsComponent,
    FattendanceComponent,
    FvieweventComponent,
    LvieweventComponent,
    ViewbooksComponent,
    StudentactionsComponent,
    FacultyactionsComponent,
    LibraryactionsComponent,
    AddeventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
