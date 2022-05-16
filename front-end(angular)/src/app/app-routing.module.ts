import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { StudentComponent } from './MyComponents/student/student.component';
import { FacultyComponent } from './MyComponents/faculty/faculty.component';
import { LibrarianComponent } from './MyComponents/librarian/librarian.component';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { AdminDashboardComponent} from './MyComponents/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './MyComponents/student-dashboard/student-dashboard.component';
import { FacultyDashboardComponent } from './MyComponents/faculty-dashboard/faculty-dashboard.component';
import { LibrarianDashboardComponent } from './MyComponents/librarian-dashboard/librarian-dashboard.component';
import { MyprofileComponent } from './actions/student/myprofile/myprofile.component';
import { ViewresultComponent } from './actions/student/viewresult/viewresult.component';
import { ViewassignmentComponent } from './actions/student/viewassignment/viewassignment.component';
import { ViewattendanceComponent } from './actions/student/viewattendance/viewattendance.component';
import { ViewtimetableComponent } from './actions/student/viewtimetable/viewtimetable.component';
import { Student } from './classes/student';
import { AddbookComponent } from './actions/library/addbook/addbook.component';
import { RequestbookComponent } from './actions/library/requestbook/requestbook.component';
import { IssuebookComponent } from './actions/library/issuebook/issuebook.component';
import { ReturnbookComponent } from './actions/library/returnbook/returnbook.component';
import { FassignmentComponent } from './actions/faculty/fassignment/fassignment.component';
import { FattendanceComponent } from './actions/faculty/fattendance/fattendance.component';
import { FresultsComponent } from './actions/faculty/fresults/fresults.component';
import { FtimetableComponent } from './actions/faculty/ftimetable/ftimetable.component';
import { VieweventComponent } from './actions/student/viewevent/viewevent.component';
import { FvieweventComponent } from './actions/faculty/fviewevent/fviewevent.component';
import { LvieweventComponent } from './actions/library/lviewevent/lviewevent.component';
import { ViewbooksComponent } from './actions/student/viewbooks/viewbooks.component';
import { StudentactionsComponent } from './actions/admin/studentactions/studentactions.component';
import { FacultyactionsComponent } from './actions/admin/facultyactions/facultyactions.component';
import { LibraryactionsComponent } from './actions/admin/libraryactions/libraryactions.component';
import { AddeventComponent } from './actions/admin/addevent/addevent.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'student', component: StudentComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'librarian', component: LibrarianComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-dashboard/:ausername', component: AdminDashboardComponent},
  { path: 'student-dashboard/:susername', component: StudentDashboardComponent},
  { path: 'faculty-dashboard/:fusername', component: FacultyDashboardComponent},
  { path: 'librarian-dashboard/:lusername', component: LibrarianDashboardComponent},
  { path: 'student/myprofile/:susername', component: MyprofileComponent },
  { path: 'student/viewbooks', component: ViewbooksComponent},
  { path: 'student/viewresult', component:ViewresultComponent},
  { path: 'student/viewassignment', component:ViewassignmentComponent},
  { path: 'student/viewattendance', component:ViewattendanceComponent},
  { path: 'student/viewtimetable', component:ViewtimetableComponent},
  { path: 'student/viewevents', component: VieweventComponent},
  { path: 'library/addbook/:lusername', component: AddbookComponent},
  { path: 'library/requestbook/:lusername', component: RequestbookComponent},
  { path: 'library/issuebook', component: IssuebookComponent},
  { path: 'library/returnbook', component: ReturnbookComponent},
  { path: 'library/viewevent', component: LvieweventComponent},
  { path: 'faculty/fassignments', component: FassignmentComponent},
  { path: 'faculty/fattendance', component: FattendanceComponent},
  { path: 'faculty/fresults', component: FresultsComponent},
  { path: 'faculty/ftimetable', component: FtimetableComponent},
  { path: 'faculty/fviewevent', component: FvieweventComponent},
  { path: 'admin/studentactions/:ausername', component: StudentactionsComponent},
  { path: 'admin/facultyactions/:ausername',component: FacultyactionsComponent},
  { path: 'admin/libraryactions/:ausername', component: LibraryactionsComponent},
  { path: 'admin/addevent', component: AddeventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
