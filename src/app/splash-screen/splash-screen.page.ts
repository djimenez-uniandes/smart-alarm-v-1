import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  public progress = 0;

  constructor(private router: Router) {
    let interval = setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {

        setTimeout(() => {
          clearInterval(interval);
          this.router.navigate(['/home']);
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

  ngOnInit() {
    console.log("cargo")
  }

}
