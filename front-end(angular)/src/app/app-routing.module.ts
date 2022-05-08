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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'student', component: StudentComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: 'librarian', component: LibrarianComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent},
  { path: 'student-dashboard', component: StudentDashboardComponent},
  { path: 'faculty-dashboard', component: FacultyDashboardComponent},
  { path: 'librarian-dashboard', component: LibrarianDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
