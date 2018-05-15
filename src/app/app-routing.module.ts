import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from '@services/auth/auth.service'

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'project/:id',
    loadChildren: './pages/project/project.module#ProjectModule'
  },
  {
    path: 'projects',
    loadChildren: './pages/projects/projects.module#ProjectsModule'
  },
  {
    path: 'admin',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthService]
  },
  {
    path: 'addproject',
    loadChildren: './pages/add-project/add-project.module#AddProjectModule',
    canActivate: [AuthService]
  },
  {
    path: 'manageprojects',
    loadChildren: './pages/manage-projects/manage-projects.module#ManageProjectsModule',
    canActivate: [AuthService]
  },
  {
    path: 'messages',
    loadChildren: './pages/manage-messages/manage-messages.module#ManageMessagesModule',
    canActivate: [AuthService]
  },
  {
    path: 'addpost',
    loadChildren: './pages/add-post/add-post.module#AddPostModule',
    canActivate: [AuthService]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
