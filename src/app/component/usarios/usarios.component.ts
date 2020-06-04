import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usarios',
  templateUrl: './usarios.component.html',
  styleUrls: ['./usarios.component.scss']
})
export class UsariosComponent implements OnInit {

  listUsarios:any = [
    {
      id: 1,
      nombre: "Luis",
      apellido: "Carvajal",
      edad: 22,
      estado: true
    }
  ];

  data:any = {};
  vistaForm:boolean = false;

  constructor(

  ) {
    console.log(this.listUsarios);
  }

  ngOnInit(): void {
  }

  guardarUsuario(){
    console.log( this.data )
    this.listUsarios.push( this.data );
  }

  CambiarVista(){
    this.vistaForm = !this.vistaForm
  }

}
