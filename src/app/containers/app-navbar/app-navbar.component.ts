import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {
  Search = '';
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this._router.navigate(['/search', this.Search]);
  }
}
