import { Component, OnInit } from '@angular/core';
import { JugadoresvicbenService, Jugador } from 'src/app/servicios/jugadoresvicben.service';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.css']
})
export class JamesComponent implements OnInit {
  jugador:Jugador[] = []
  james:Jugador[]

  constructor(private _servicio:JugadoresvicbenService) { 
    this.james = [{
      nombre: "",
      bio: "",
      equipo: "",
      img: "",
      nacimiento: "",
      seleccion: "",
      lin: ""
    }]
  }

  ngOnInit(): void {
    this.jugador = this._servicio.getJugadores()

    for(let james of this.jugador){
      if(james.nombre == "James Rodriguez"){
        this.james = [{
          nombre: james.nombre,
          bio: james.bio,
          equipo: james.equipo,
          img: james.img,
          nacimiento: james.nacimiento,
          seleccion: james.seleccion,
          lin: james.lin
        }]
      }
    }
  }

}