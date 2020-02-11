import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'students',
    loadChildren: () => import('@app/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
