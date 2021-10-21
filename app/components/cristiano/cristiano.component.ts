import { Component, OnInit } from '@angular/core';
import { JugadoresvicbenService, Jugador } from 'src/app/servicios/jugadoresvicben.service';

@Component({
  selector: 'app-cristiano',
  templateUrl: './cristiano.component.html',
  styleUrls: ['./cristiano.component.css']
})
export class CristianoComponent implements OnInit {

  jugador:Jugador[] = []
  cristiano:Jugador[]

  constructor(private _servicio:JugadoresvicbenService) { 
    this.cristiano = [{
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

    for(let cristiano of this.jugador){
      if(cristiano.nombre == "Cristiano Ronaldo"){
        this.cristiano = [{
          nombre: cristiano.nombre,
          bio: cristiano.bio,
          equipo: cristiano.equipo,
          img: cristiano.img,
          nacimiento: cristiano.nacimiento,
          seleccion: cristiano.seleccion,
          lin: cristiano.lin
        }]
      }
    }
  }


  
}
