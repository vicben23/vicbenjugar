import { Component, OnInit } from '@angular/core';
import { JugadoresvicbenService, Jugador } from 'src/app/servicios/jugadoresvicben.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {


  jugadores:Jugador[]=[];


  constructor(private _jugadoresvicbenService:JugadoresvicbenService ) { }

  ngOnInit(): void {
    this.jugadores=this._jugadoresvicbenService.getJugadores();
    console.log(this.jugadores);


  }

}
