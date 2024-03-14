import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-alarma',
  templateUrl: './crear-alarma.page.html',
  styleUrls: ['./crear-alarma.page.scss'],
})
export class CrearAlarmaPage implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }
  alertButtons = ['Action'];
  public pageTitle= "CREAR ALARMA"
  ngOnInit() {
    this.alertButtons = ['Action'];

    this.route.params.subscribe(params => {
      const a = params['e'];
      console.log(a)
      if (a) {
        this.pageTitle = "EDITAR ALARMA"; // Cambiar el título si la variable existe
      }
    });
  }
  goHome(){
    this.router.navigate(["home"]);
  }

}
