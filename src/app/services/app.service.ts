import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()
export class AppService {

  constructor(
    private _router: Router,
    private _location: Location
  ) { }

  public goToHomePage() {
    return this._router.navigateByUrl('');
  }

  public goToAdminPage() {
    return this._router.navigateByUrl('/admin');
  }

  public goToPortfoliosPage() {
    return this._router.navigateByUrl('/portfolios');
  }

  public goToAddNewPortfolioPage() {
    return this._router.navigateByUrl('/addportfolio');
  }

  public goToPortfolioPage(key) {
    return this._router.navigate(['/portfolio/', key]);
  }

  public goToPortfolioEditPage(key) {
    return this._router.navigate(['/editportfolio/', key]);
  }

  public goBackToPreviousPage() {
    return this._location.back();
  }

}
