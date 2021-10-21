import { Component, OnInit } from '@angular/core';
import { JugadoresvicbenService, Jugador } from 'src/app/servicios/jugadoresvicben.service';

@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent implements OnInit {

  jugador:Jugador[] = []
  messi:Jugador[]

  constructor(private _servicio:JugadoresvicbenService) { 
    this.messi = [{
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

    for(let messi of this.jugador){
      if(messi.nombre == "Leonel Messi"){
        this.messi = [{
          nombre: messi.nombre,
          bio: messi.bio,
          equipo: messi.equipo,
          img: messi.img,
          nacimiento: messi.nacimiento,
          seleccion: messi.seleccion,
          lin: messi.lin
        }]
      }
    }
  }


}
