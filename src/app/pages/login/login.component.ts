import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { NotificationService } from '@services/notification/notification.service'
import { AuthService } from '@services/auth/auth.service'
import { SeoService } from '@services/seo/seo.service'

@Component({
  selector: 'kgp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [NotificationService, AuthService, SeoService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  isLoading = 'ion-ios-compose'

  constructor(
    private _ns: NotificationService,
    private _as: AuthService,
    private _route: Router,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.metaLoad()
    this.loadLoginForm()
  }

  metaLoad() {
    return this.seo.generateTags({
      title: 'Login | Kerron Gordon',
      description: 'Kerron specializes in making exceptional websites',
      image: 'https://kerron-gordon.firebaseapp.com/assets/desktop.jpeg',
      slug: 'login'
    })
  }

  loadLoginForm() {
    return this.loginForm = new FormGroup({
      loginEmail: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.email]),
        updateOn: 'change'
      }),
      loginPassword: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(8)])
      })
    })
  }

  emailV() {
    const email = this.loginForm.controls.loginEmail

    if ( !email.dirty ) {
      return this._ns.notifitem('Please add an Email', 'There is no Email Found in The the Email feld', true)
    }

    if ( email.invalid ) {
      return this._ns.notifitem('Email is Invalid', 'Please add an Valid Email `example@gmail.com`', true)
    }

    return this.passV()
  }

  passV() {
    const password = this.loginForm.controls.loginPassword

    if ( !password.dirty ) {
      return this._ns.notifitem('Please add an Password', 'There is no Password Found in The the Password feld', true)
    }

    if ( password.invalid ) {
      return this._ns.notifitem('Password is Invalid', 'Password most have a minimum length of 8 characters', true)
    }

    this.login()
  }

  onSubmit() {
    this.emailV()
  }

  login() {
    const { loginEmail, loginPassword } = this.loginForm.value
    this.isLoading = 'ion-load-c'
    return this._as.login(loginEmail, loginPassword)
      .then(() => this.isLoading = 'ion-ios-compose')
      .catch(error => {
        this.isLoading = 'ion-ios-compose'
        return this._ns.notifitem(error.code, error.message, true)
      })
  }

}
