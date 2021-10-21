import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//aqui se importa las urls
import { APP_ROUTING } from './app.routes';

import { JugadoresvicbenService } from './servicios/jugadoresvicben.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { MessiComponent } from './components/messi/messi.component';
import { JamesComponent } from './components/james/james.component';
import { CristianoComponent } from './components/cristiano/cristiano.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    MessiComponent,
    JamesComponent,
    CristianoComponent,
    HeaderComponent,
    FooterComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
    
  ],
  providers: [JugadoresvicbenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
