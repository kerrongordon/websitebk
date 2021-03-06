import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from './services/app.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification/notification.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'kg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [AppService, AuthService, NotificationService]
})
export class AppComponent implements OnInit{
  toggleheaderbar: string;
  complexForm: FormGroup;
  toggleLogin: boolean;
  toggleMenuClass: string;
  menuScrollToTop: number = 75

  pageTitleh: string;

  @HostListener("window:scroll", ['$event'])
    onWindowScroll(event) {
      this.toggleMenuBar()
    }

  constructor(
    public _title: Title,
    private _appService: AppService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _notificationService: NotificationService
  ) {
    this.complexForm = _formBuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'pass': [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  ngOnInit() {  }

  private toggleMenuBar() {

    if (window.pageYOffset === 0 || window.pageYOffset === 1) {
      return this.toggleheaderbar = '';
    }
    
    if (window.pageYOffset > this.menuScrollToTop) {
      this.toggleheaderbar = 'toggle';
    } else {
      this.toggleheaderbar = '';
    }
    
    return this.menuScrollToTop = window.pageYOffset
  }

  public goBack() {
    return this._appService.goBackToPreviousPage();
  }

  public toggleMenu() {
    return this.toggleMenuClass = !this.toggleMenuClass ? 'toggleMenu' : '';
  }

  public toggleLoginDialog() {
    return this.toggleLogin = !this.toggleLogin;
  }

  public login(event: any, isValid: Boolean) {
    if (!isValid) { return }
     this.toggleLogin = false;
    return this._authService.loginWithEmail(event.email, event.pass)
      .then(success => this._appService.goToAdminPage())
      .catch(err => this._notificationService.notifitem('error', err.name, err.message, true));
  }

  public changeOfRoutes() {
    return window.scroll(0, 0);
  }

}
