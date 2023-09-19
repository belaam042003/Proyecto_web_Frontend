import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './homeG.component.html',
  styleUrls: ['./homeG.component.css']
})
export class HomeGComponent {
  constructor(private router: Router){}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
