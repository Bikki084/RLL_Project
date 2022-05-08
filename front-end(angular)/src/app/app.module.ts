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
import { MyProfileComponent } from './actions/student/my-profile/my-profile.component';

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
    MyProfileComponent,
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
