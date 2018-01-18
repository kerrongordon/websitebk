import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login.component'
import { FooterModule } from '@components/footer/footer.module'
import { ReactiveFormsModule } from '@angular/forms'
import { ButtonModule } from '@components/button/button.module'

const routes: Routes = [
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    ReactiveFormsModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
