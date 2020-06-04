import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luis',
  templateUrl: './luis.component.html',
  styleUrls: ['./luis.component.scss']
})
export class LuisComponent implements OnInit {
  listUsuari:any=[
    {
      nombre: "luis",
      apellido:"caravajal",
      edad:22
    }
  ];
  btnvisable:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  crearusuario(){
    this.btnvisable = true;
  }

  ocultarusuario(){
    this.btnvisable = false;
  }

}
